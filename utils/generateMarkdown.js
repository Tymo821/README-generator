// TODO: Create a function that returns a license badge based on which license is passed in
// Render the license badge
function renderBadge(license) {
  // If there is no license, return an empty string
  if (license === 'None') {
    return '';
  }
  // Return the license badge
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
}

// TODO: Create a function that returns the license link
// Render the license link
function renderLink(license) {
  // If there is no license, return an empty string
  if (license === 'None') {
    return '';
  }

  // Normalize the license name for the URL
  let urlLicense = license;
  if (license === 'GNUGeneralPublicv3.0') {
    urlLicense = 'GPL-3.0';
  }

  // Return the license link
  return `(https://opensource.org/licenses/${urlLicense})`;
}

// TODO: Create a function that returns the license section of README
// Render the license section
function renderLicense(license) {
  // If there is no license, return an empty string
  if (license === 'None') {
    return '';
  }
  // Return the license badge and link
  return `${renderBadge(license)}${renderLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicense(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or futher information, please contact me:

- GitHub username: ${data.gitHubUsername}
- GitHub link: https://github.com/${data.gitHubUsername}
- Email address: ${data.emailAddress}
`;
}

// Export the `generateMarkdown` function
module.exports = generateMarkdown;