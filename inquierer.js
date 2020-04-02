const inquirer = require('inquirer');

const Prompt = {

    init : function(){
       return inquirer.prompt([
        {
            type:'list',
            message: "What would you like to do?",
            name: "action",
            choices: [
                'Manage Employees',
                'Manage Department',
                'Manage Managers'
            ]
        }
       ])
    },
    
    addEmployee: function(){
        return inquirer.prompt([
            { type:'input',
        message: "What is the employee's first name?",
        name: "firstName"},
        { type:'input',
        message: "What is the employee's last name?",
        name: "lastName"},
        { type:'list',
        message: "What is the employee's role?",
        name: "role",
        choices: async function (answers){

        }
        },
        { type:'list',
        message: "What would you like to do?",
        name: "action"},

        ]);
    }



}



module.exports = Prompt