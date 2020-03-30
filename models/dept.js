module.exports = (connection, DataTypes) => {
    const Dept = connection.define('department', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        freezeTableName: true});
        return Dept;
    };