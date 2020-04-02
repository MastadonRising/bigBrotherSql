
module.exports = (connection, DataTypes) => {
    const Employee = connection.define('employee', {
        id: {type:DataTypes.INTEGER,
            primaryKey: true},
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        role_id: DataTypes.INTEGER,
        manager_id: DataTypes.INTEGER
    },{freezeTableName: true});
        return Employee;
    };
