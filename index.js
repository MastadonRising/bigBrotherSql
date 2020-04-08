const inquirer = require('inquirer');
const prompt = require("./lib/questions");
const db= require('./config/db');
async function init(){
    inquirer.prompt(prompt.init)
        .then(answers=>{
            console.log(answers);
            
            switch(answers.action)
            { case  'Manage Employees':
           
            break;
            case  'Manage Department':
               
            break;
            case 'Manage Managers':
                
            break;
            default: ('Thank you for enabling Big Brother.')

            break;
            }       
        });
};




init();

