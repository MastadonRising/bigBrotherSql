module.exports = function (connection, DataTypes) {
    const Dept = connection.define('department', {
        id: {type: DataTypes.INTEGER,
            primaryKey: true},
        name: {type: DataTypes.STRING}},
        {freezeTableName: true}
        );
        Dept.associate = function(models) {
            Dept.hasMany(models.role);
        };

    return Dept;
    };
   
    