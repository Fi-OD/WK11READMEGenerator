import inquirer from "inquirer";
import fs from "fs/promises";


let {projectTitle, projectDescription} = await inquirer
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
}
    ])


let readMeContent = `

*${projectTitle}

** Project Description
${projectDescription}

** Table of Contents

** Installation

** Usage

** License

** Contributing

** Test

** Questions







`