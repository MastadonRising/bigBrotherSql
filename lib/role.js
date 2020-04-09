const inquirer = require("inquirer");
const db= require('../models');
const cTable = require("console.table");

async function viewRoles() {
  let results;
  try {
    results = await db.role.findAll({include: [db.department, db.employee]});
  } catch (err) {
    console.log("Something went sideways",err);
  }
  let values = [];
    results.forEach(res => { 
      values.push({
        id: res.id,
        dept: res.departmentId,
        deptName: res.department.name,
        title: res.title,
        salary: res.salary
      }); 
    });
    
    console.table(values);
   return values;
  };

