// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
 
  ${data.description}

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}
  
  
  ${renderLicenseSection(data.license)}
  
  ${renerLicense(data.license)}

  ---

  ## Contributing

  ${data.credits}
  
  ## Images

  <img src="images/Screen Shot 2022-08-24 at 9.26.55 AM.png">

  ## Tests

  ${data.test}

  ## Questions

  Please contact me using the following links:

  [Email: ${data.email}](mailto:${data.email})

  [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;



