// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {license.badge}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {license.link}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {license.section}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Description

// ${data.Description}

# Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Licence](#license)

* [Contributing](#contributing)

* [Tests](*tests)

* [Questions](*questions)

# Installation

// ${data.Installation}

# Usage

// ${data.Usage}

# License

// ${data.License}

# Contributing

// ${data.Contribution}

#Tests

// ${data.Test}

#Questions
Let me know if you have any questions.

Find my GitHub repository at ${data.UserName} or use my email address at ${data.Email}
`;
}

module.exports = generateMarkdown;
