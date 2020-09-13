const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { prompts } = require("inquirer");
const { RSA_X931_PADDING } = require("constants");
const { get } = require("http");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer.prompt([{
    type: 'recursive',
    message: 'Add a new user?',
    name: 'users',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            when: (answers) => answers.role === "Manager",
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            when: (answers) => answers.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where do you go to school?',
            when: (answers) => answers.role === "Intern",
        },
    ]
}]).then(function(answers) {
    const team = answers.users;
    // console.log(team);
    createObjects(team);
});

let teamArray = [];

function createObjects(team) {
    for (i = 0; i < team.length; i++) {
        if (team[i].role == "Manager") {
            // console.log("manager");
            var x = new Manager(team[i].name, team[i].id, team[i].email, team[i].office)
            // console.log(x);
            teamArray.push(x);
        }
        if (team[i].role == "Engineer") {
            // console.log("engineer");
            var y = new Engineer(team[i].name, team[i].id, team[i].email, team[i].github)
            // console.log(y);
            teamArray.push(y);
        }
        if (team[i].role == "Intern") {
            // console.log("intern");
            var z = new Intern(team[i].name, team[i].id, team[i].email, team[i].school)
            // console.log(z);
            teamArray.push(z);
        }
        checkArray(team)
    }
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function checkArray(team) {
    if (teamArray.length == team.length) {
        // console.log(teamArray)
        var renderHTML = render(teamArray);
        appendHTML(renderHTML);
    }
}


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


function appendHTML(renderHTML) {
    fs.appendFile("output/team.html", renderHTML, function(err) {
        if (err) {
          console.log(err);
        }
    });
}


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


