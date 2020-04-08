module.exports = (connection, DataTypes) => {
    const Dept = connection.define('department', {
        id: {type: DataTypes.INTEGER,
            primaryKey: true},
        name: {type: DataTypes.STRING}},
        {freezeTableName: true}
        );
        return Dept;
    };
   
    