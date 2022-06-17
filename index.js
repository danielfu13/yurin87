const writeHTML = require("./generateHTML/generateHTML");
// const Employee = require("./roles/Employee");
const Manager = require("./roles/Manager");
const Engineer = require("./roles/Engineer");
const Intern = require("./roles/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const teamArray = [];

// Add Manager
const teamManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
    ])
    .then(addManager => {
        const {name, id, email, officeNumber} = addManager;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

// Choose employee role
const newEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is the new employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's name ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more employees?',
            default: false
        }
    ])
    .then(employeeData => { 

        let { name, id, email, role, github, school, addEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (addEmployee) {
            return newEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};
 
const writeFile = data => {
    fs.writeFile('./page/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Profile has been created!")
        }
    })
}; 

teamManager()
  .then(newEmployee)
  .then(teamArray => {
    console.log(teamArray);
    return writeHTML(teamArray);
  })
  .then(pageHTML => {
    console.log(pageHTML);
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });


// // add engineer
// const teamEnigneer = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the engineer's name?"
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the engineer's ID number?"
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the engineer's email?"
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: "What is the engineer's github?"
//         },
//     ])
//     .then(addEngineer => {
//         const{name, id, email, github} = addEngineer;

//         console.log(addEngineer)
//     });
// };

// // Add Intern
// const teamIntern = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the intern's name?"
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the intern's ID number?"
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the intern's email?"
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: "What school did the intern attend?"
//         },
//     ])
//     .then(addIntern => {
//         const{name, id, email, school} = addIntern;

//         console.log(addIntern)
//     });
// };