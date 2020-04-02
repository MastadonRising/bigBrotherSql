const cTable = require("console.table");
const prompt = require("./inquierer");
const db= require('./config/db');
async function init(){
    prompt.init()
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

// const deptList =  db.dept.findAll({attributes:['name']}).then(function(departments){
//     let dept=[];
//     departments.forEach(element => {dept.push(element.dataValues[0].name)    
//     });
// })

// console.log(deptList);
    