  
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
db.comments = require('../models/dept.js')(connection, Sequelize);
db.role = require('../models/role.js')(connection, Sequelize);

//Relations
db.manager.belongsTo(db.employee);
db.dept.belongsTo(db.role);
db.role.belongsTo(db.employee);

module.exports = db;