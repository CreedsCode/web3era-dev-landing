#!/bin/bash

# Function to check if a command exists
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Check if unzip is installed
if ! command_exists unzip; then
  echo "Error: 'unzip' command is not found. Please install it and try again."
  exit 1
fi

# Get current date
current_date=$(date +%Y-%m-%d)

# Get the default branch name
default_branch=$(git rev-parse --abbrev-ref HEAD)

# Create a new branch from the default branch with the current date
branch_name="import-$current_date"
git checkout -b "$branch_name"

# Find the zip file starting with "app" and ending with ".zip"
zip_file=$(find . -maxdepth 1 -type f -name "app*.zip" ! -name "imported_*.zip" | head -n 1)

if [ -z "$zip_file" ]; then
  echo "No matching zip file found."
  exit 1
fi

# Create a directory to store the extracted files
extracted_dir="extracted_files"
mkdir -p "$extracted_dir"

# Extract the contents of the zip file to the directory, excluding the .git directory
unzip -q "$zip_file" -d "$extracted_dir" -x ".git/*"

# Rename the zip file with the "imported_" prefix
imported_zip_file="imported_$(basename "$zip_file")"
mv "$zip_file" "$imported_zip_file"

echo "Created a new branch '$branch_name' from '$default_branch'."
echo "Extracted the contents of $zip_file to the directory '$extracted_dir'."
echo "Please manually apply the changes from the extracted files to the new branch."
echo "To apply the changes, run: git apply --directory=\"$extracted_dir\""
echo "After applying the changes, you can commit and push the new branch."
echo "To revert the changes made by this script, run: git checkout $default_branch && git branch -D $branch_name"