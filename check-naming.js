const fs = require('fs');
const path = require('path');

// Define your custom naming conventions (replace with your specific rules)
const namingRules = {
  'snake_case': /^[a-z0-9_]+$/, // Enforce snake_case for file and variable names
  'kebab-case': /^[-a-z0-9]+$/, // Enforce kebab-case for CSS class names (optional)
  'camelCase': /^[A-Z][a-z0-9]*$/, // Enforce camelCase for component names (optional)
};

// Function to check if a name matches a naming rule
function checkName(name, rule) {
  return namingRules[rule].test(name);
}

// Function to check a filename against naming conventions
function checkFilename(filename) {
  const extension = path.extname(filename);
  const name = filename.slice(0, -extension.length); // Remove extension

  // Check if filename matches any defined rules
  for (const ruleName in namingRules) {
    if (checkName(name, ruleName)) {
      return true; // Valid filename
    }
  }

  return false; // Invalid filename
}

// Function to recursively check naming conventions in a directory with line number
function checkDirectory(dirPath) {
  fs.readdirSync(dirPath).forEach((filename, index) => {
    const filePath = path.join(dirPath, filename);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      checkDirectory(filePath); // Recurse into subdirectories
    } else if (stats.isFile()) {
      const lineNumber = index + 1; // Assuming files are listed sequentially
      if (!checkFilename(filename)) {
        console.error(`Invalid filename (Line ${lineNumber}): ${filePath}`);
      }
    }
  });
}

// Check naming conventions in the project root directory
checkDirectory('./src');
