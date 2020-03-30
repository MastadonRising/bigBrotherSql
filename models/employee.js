
module.exports = (connection, DataTypes) => {
    const Employee = connection.define('employee', {
        id: Sequelize.INTEGER,
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        role_id: Sequilize.INTEGER,
        manager_id: Sequelize.INTEGER,
        freezeTableName: true});
        return Employee;
    };
