const inquirer = require("inquirer");
const db= require('../models');
const cTable = require("console.table");

async function viewEmployees() {
  let results;
  try {
    results = await db.employee.findAll({include: [db.role]});
  } catch (err) {
    console.log("Something went sideways",err);
  }
  let values = [];
    results.forEach(res => { 
      values.push({
        id: res.id,
        First_Name: res.first_name,
        Last_Name: res.last_name,
        Role : res.role.title
      }); 
    });
    
    // console.log(" ");
     console.table(values);
   return values;
  };

 viewEmployees();