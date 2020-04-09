const inquirer = require("inquirer");
const db= require('../models');
const cTable = require("console.table");

async function viewDepartments() {
  let results;
  try {
    results = await db.dept.findAll();
  } catch (err) {
    console.log("Something went sideways",err);
  }
  let values = [];
    results.forEach(res => { 
      values.push({
        id: res.id,
        dept: res.name
      }); 
    });
    
    // console.log(" ");
     console.table(values);
   return values;
  };

 