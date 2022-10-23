
function renderLicenseBadge(data) {
  let licenseName = data.license[0];
  let licenseMd = '';
  if (licenseName === 'MIT License') {
    licenseMd = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (licenseName === 'Mozilla Public License 2.0') {
    licenseMd = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  };
  if (licenseName === 'Open Database License (ODbL)'){
    licenseMd = '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'

  };
  if (licenseName === 'Apache 2.0 License') {
    licenseMd = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
   };

   return licenseMd;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

${renderLicenseBadge(data)}


  **Deployment Date:**  ${data.date}<br>
  **Technologies used:**  ${data.tech}<br>
  **Project goal:**  ${data.goal}<br>


  ## Table of Contents
  1. [Project Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contribution Guidelines](#Contributing)
  5. [Challenges Encounted](#Challenges)
  6. [Tests](#Tests)
  7. [License](#License)
  <br>
  
  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage 
 
  ${data.usage}

  ## Contributing

  ${data.contribute}
 
  ## Challenges
 
  ${data.challenges}

  ## Tests

  ${data.tests}

  ## License

  Click the badge to learn more about the license used for this project.
  <br>${renderLicenseBadge(data)}

  ## Questions?

  Find me on GitHub at: https://github.com/${data.username}

  You can also send any questions about this project to: ${data.email}

  _ _This README was generated using a command-line application_ _

`;
}

module.exports = generateMarkdown;
