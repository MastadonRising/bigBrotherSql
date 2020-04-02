  
'use strict'

const Sequelize = require('sequelize');
const connection = require('./connection');

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

//Models/tables
db.employee = require('../models/employee')(connection, Sequelize);
db.dept = require('../models/dept.js')(connection, Sequelize);
db.role = require('../models/role.js')(connection, Sequelize);
db.manager = require('../models/employee')(connection, Sequelize);
//Relations
db.dept.sync({alter: true});
 db.role.sync({alter: true});
db.employee.sync({alter: true});
db.manager.belongsTo(db.employee);
db.role.belongsTo(db.dept);
db.role.belongsTo(db.employee);
module.exports = db;