// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'Eclipse Public License 1.0') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'no license') {
    return '';
  } else {
    return '- [license](#license)'
  }
}

//Created a function that returns the license link
//If there is no license, returned an empty string
function renerLicense(license) {
  if (license === 'apache') {
    return '[apache license](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'boost') {
    return '[boost license](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'BSD 3-Clause License') {
    return '[BSD 3-Clause license](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'BSD 2-Clause License') {
    return '[BSD 2-Clause license](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'Eclipse Public License 1.0') {
    return '[eclipse public license 1.0](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3 license](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  } else {
    return `## [License](#license)
  The project is licensed under ${license}`
  }
}

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
  
  
  ## License
  
  ${renerLicense(data.license)}

  ---

  ## Contributing

  ${data.credits}
  
  ## Images

  <img src="images/Screen Shot 2022-09-14 at 7.18.50 PM.png">

  ## Tests

  ${data.test}

  ## Questions

  Please contact me using the following links:

  [Email: ${data.email}](mailto:${data.email})

  [GitHub](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
