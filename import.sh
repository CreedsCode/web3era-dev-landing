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
default_branch=$(git remote show origin | awk '/HEAD branch/ {print $NF}')

# Create a new branch from the default branch with the current date
branch_name="import-$current_date"
git checkout "$default_branch"
git checkout -b "$branch_name"

# Find the zip file starting with "app" and ending with ".zip"
zip_file=$(find . -maxdepth 1 -type f -name "app*.zip" ! -name "imported_*.zip" | head -n 1)

if [ -z "$zip_file" ]; then
  echo "No matching zip file found."
  exit 1
fi

# Create a temporary directory to extract the zip file
temp_dir=$(mktemp -d)

# Extract the contents of the zip file to the temporary directory, excluding the .git directory
unzip -q "$zip_file" -d "$temp_dir" -x ".git/*"

# Rename the zip file with the "imported_" prefix
imported_zip_file="imported_$(basename "$zip_file")"
mv "$zip_file" "$imported_zip_file"

# Apply the changes from the temporary directory to the new branch
git apply --directory="$temp_dir"

# Remove the temporary directory
rm -rf "$temp_dir"

echo "Created a new branch '$branch_name' from '$default_branch' and applied changes from $zip_file."
echo "Please review the changes, commit, and push the new branch."
echo "To revert the changes made by this script, run: git checkout $default_branch && git branch -D $branch_name"