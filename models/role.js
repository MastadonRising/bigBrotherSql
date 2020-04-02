module.exports = (connection, DataTypes) => {
    const Role = connection.define('role', {
        id: {type:DataTypes.INTEGER,
            primaryKey: true},
        title: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        dept_id: DataTypes.INTEGER},
        {freezeTableName: true});
        return Role;
    };