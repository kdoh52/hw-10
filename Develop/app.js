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
fs.appendFile("team.html", "<link rel='stylesheet' href='style.css'>" + '\n' + "<div class='container'>", function(err) {
    if (err) {
      console.log(err);
    }
});

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
    console.log(team);
    // module.exports.team = "hi";
    renderhtml(team);
});

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function renderhtml(team) {
    for (i = 0; i < team.length; i++) {
        let html = "";
        // console.log(team[i]);
        html += "<div class='member' id='" + team[i].id + "'>" + "\n";
        html += "<div class='titles' id='" + team[i].id + "'>" + "\n";
        html += "<h1>" + team[i].name + "</h1>" + "\n";
        html += "<h2>" + team[i].role + "</h2>" + "\n";
        html += "</div>" + "\n"
        html += "<div class='info'>" + "\n";
        html += "<p>" + "ID: " + team[i].id + "</p>" + "\n"
        html += "<p>" + "Email: " + team[i].email + "</p>" + "\n"
        if (team[i].office) {
            html += "<p>" + "Office: " + team[i].office + "</p>" + "\n"
        }
        if (team[i].github) {
            html += "<p>" + "GitHub: " + team[i].github + "</p>" + "\n"
        }
        if (team[i].school) {
            html += "<p>" + "School: " + team[i].school + "</p>" + "\n"
        }
        html += "</div>" + "\n"
        html += "</div>" + "\n"
        appendHTML(html);
    }
    closeHTML();
}


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function appendHTML(toAdd) {
    fs.appendFile("team.html", toAdd + '\n', function(err) {
        if (err) {
          console.log(err);
        }
    });
}
function closeHTML() {
    fs.appendFile("team.html", "</div>" + '\n', function(err) {
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


