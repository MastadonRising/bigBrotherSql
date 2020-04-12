const Questions = {
  init: [
    {
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "Manage departments",
        "Manage roles",
        "Manage employees",
        "Quit program",
      ],
    },
  ],
  // department Questions
  genDept: [
    {
      type: "list",
      name: "deptChoice",
      message: "Options for department management?",
      choices: [
        "View all departments",
        "Add department",
        "Remove department",
        "Return to main menu",
      ],
    },
  ],
  selectDept: [
    {
      type: "list",
      name: "deptId",
      message: "Select department:",
    },
  ],
  addDept: [
    {
      type: "input",
      name: "newDept",
      message: "Enter name of department you would like to add:",
    },
  ],
  // Employee specific Questions
  genEmpl: [
    {
      type: "list",
      name: "emplChoice",
      message: "Options for employee management?",
      choices: [
        "View all employees",
        "Add employee",
        "Eliminate employee",
        "Return to main menu",
      ],
    },
  ],
  selectEmpl: [
    {
      type: "list",
      name: "empl",
      message: "Select employee",
      // choice will be dynamically set from existing employees
    },
  ],
  confirmDel: [
    {
      type: "confirm",
      name: "confDel",
      message: "Are you sure you want to eliminate this employee?",
      default: false,
    },
  ],
  addEmplName: [
    {
      type: "input",
      name: "firstName",
      message: "Enter the first name of your new employee:",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter the last name of your new employee:",
    },
  ],
  //role Specific Questions
  genRole: [
    {
      type: "list",
      name: "roleChoice",
      message: "Options for role management?",
      choices: [
        "View all roles",
        "Add role",
        "Update role",
        "Remove role",
        "Return to main menu",
      ],
    },
  ],
  selectRole: [
    {
      type: "list",
      name: "roleId",
      message: "Select role:",
      // choices will be dynamically set from existing departments
    },
  ],
  addRole: [
    {
      type: "input",
      name: "title",
      message: "Enter Role name:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter salary associated with role:",
    },
    // choice will be dynamically set from existing employees
    {
      type: "list",
      name: "deptId",
      message: "Select department to which role will be assigned:",
    },
  ],
  updateRole: [
    {
      type: "list",
      name: "attr",
      message: "Select attribute to update:",
      choices: ["Title", "Salary", "Department"],
    },
  ],
  updateTitle: [
    {
      type: "input",
      name: "title",
      message: "Enter new title:",
    },
  ],
  updateSalary: [
    {
      type: "number",
      name: "salary",
      message: "Enter new salary:",
    },
  ],
  confirmDelRole: [
    {
      type: "confirm",
      name: "delRole",
      message:
        "Are you sure you want to delete this role and elimiate all the lazy-ass proletariat?",
      default: true,
    },
  ],
};

module.exports = Questions;
