
module.exports = (connection, DataTypes) => {
    const Employee = connection.define('employee', {
        id: {type:DataTypes.INTEGER,
            primaryKey: true},
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        roleId: DataTypes.INTEGER,
        managerId: DataTypes.INTEGER
    },{freezeTableName: true});
    Employee.associate = function(models) {
        Employee.belongsTo(models.role, {
            foreignKey: {
            allowNull: false
            }
        });
    };
    return Employee;
    };
