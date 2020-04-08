const inquirer = require("inquirer");
const db= require('../config/db');
const cTable = require("console.table");

async function viewRoles() {
  let results;
  try {
    results = await db.role.findAll();
  } catch (err) {
    console.log("Something went sideways",err);
  }
  let values = [];
    results.forEach(res => { 
      values.push({
        id: res.id,
        dept: res.dept_id,
        title: res.title,
        salary: res.salary
      }); 
    });
    
    // console.log(" ");
     console.table(values);
   return values;
  };

  viewRoles();