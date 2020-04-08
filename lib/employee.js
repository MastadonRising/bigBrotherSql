const inquirer = require("inquirer");
const db= require('../config/db');
const cTable = require("console.table");

async function viewEmployees() {
  let results;
  try {
    results = await db.employee.findAll();
  } catch (err) {
    console.log("Something went sideways",err);
  }
  let values = [];
    results.forEach(res => { 
      values.push({
        id: res.id,
        First_Name: res.first_name,
        Last_Name: res.last_name
      }); 
    });
    
    // console.log(" ");
     console.table(values);
   return values;
  };

 