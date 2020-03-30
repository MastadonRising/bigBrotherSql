module.exports = (connection, DataTypes) => {
    const Role = connection.define('role', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        dept_id: DataTypes.INTEGER,
        freezeTableName: true});
        return Role;
    };