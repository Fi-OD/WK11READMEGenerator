import inquirer from "inquirer";
import fs from "fs/promises";


let {projectTitle, projectDescription, installationInstructions, usageInfo, contributionGuidelines, tests} = await inquirer
    .prompt([
{
    type:'input',
    name: 'projectTile',
    message: "What is the name of your project?",
},
{
    type:'input',
    name: 'projectDescription',
    message: "Provide a brief description of the project?",
},
{
    type:'input',
    name: 'installationInstructions',
    message: "what are the installation instructions for the user?",
},
{
    type:'input',
    name: 'usageInfo',
    message: "Provide usage information",
},
{
    type:'list',
    name: 'license',
    message: 'what license are you using?',
    choices: ['none','Apache License 2.0','GNU general Public License v3.0','MIT License','BSD 2 Clause "simplified" License','BSD 3 Clause "New" or "revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU affero General Public License v3.0', 'GNU General Public License v2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    filter(val) {}
},
{
    type:'input',
    name: 'contributionGuidelines',
    message: "Provide guideline on how to contribute?",
},
{
    type:'input',
    name: 'tests',
    message: "Provide test instructions",
},

    ])


let readMeContent = `

*${projectTitle}

** Project Description
${projectDescription}

** Table of Contents

** Installation
${installationInstructions}

** Usage
${usageInfo}

** License
${generateLicense(license)}

** Contributing
${contributionGuidelines}

** Test
${tests}

** Questions
`
fs.writeFile("README.MD", readMeContent)

function generateLicense(license){

    if (license === "Apache License 2.0")
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    
    else if (license === "GNU general Public License v3.0")
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    else if (license === "MIT License")
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);"
    
    else if (license === 'BSD 2 Clause "simplified" License')
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";

    else if (license === 'BSD 3 Clause "New" or "revised" License')
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

    else if (license === "Boost Software License 1.0" )
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

    else if (license === "Creative Commons Zero v1.0 Universal")
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

    else if (license === "Eclipse Public License 2.0")
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

    else if (license === "GNU affero General Public License v3.0")
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    else if (license === "GNU General Public License v2.0")
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" ;
    
    else if (license === 'Mozilla Public License 2.0')
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

    else if (license === 'The Unlicense')
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

    else if (license === 'none')
    
}

