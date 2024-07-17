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

# Create a new branch with the current date
branch_name="import-$current_date"
git checkout -b "$branch_name"

# Find the zip file starting with "app" and ending with ".zip"
zip_file=$(find . -maxdepth 1 -type f -name "app*.zip" ! -name "imported_*.zip" | head -n 1)

if [ -z "$zip_file" ]; then
  echo "No matching zip file found."
  exit 1
fi

# Extract the contents of the zip file, excluding the .git directory
unzip -o "$zip_file" -x ".git/*"

# Rename the zip file with the "imported_" prefix
imported_zip_file="imported_$(basename "$zip_file")"
mv "$zip_file" "$imported_zip_file"

echo "Imported website from $zip_file into branch $branch_name. Please manually merge the changes."
echo "To undo the changes made by this script, run: git checkout - && git branch -D $branch_name"