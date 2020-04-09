
module.exports = (connection, DataTypes) => {
    const Role = connection.define('role', {
        id: {type:DataTypes.INTEGER,
            primaryKey: true},
        title: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        departmentId: DataTypes.INTEGER},
        {freezeTableName: true});
    
    Role.associate = function(models) {
      
        Role.belongsTo(models.department, {
            foreignKey: {
            allowNull: false
            }
        });
        Role.hasOne(models.employee);

    };

        return Role;
    };