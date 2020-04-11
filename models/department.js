module.exports = function (connection, DataTypes) {
  const department = connection.define(
    "department",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: { type: DataTypes.STRING },
    },
    { freezeTableName: true }
  );
  department.associate = function (models) {
    department.hasMany(models.role);
  };

  return department;
};
