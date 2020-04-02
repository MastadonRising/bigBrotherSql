const inquirer = require("inquirer");
const db= require('../config/db');
const cTable = require("console.table");

async function viewDepartments() {
    let values = [];
  
    try {
      const results = await db.dept.findAll({attributes:["name"]});
     results2 = JSON.stringify(results);
     console.log(results2);

    results.forEach(res => { 
          let name = JSON.stringify(res.name)
        values.push(name); 
      });
    } catch (err) {
      console.log("Something went sideways",err);
    }
    console.log(" ");
    console.table(['Department'],values);
    // genDept();
  };

   viewDepartments()