module.exports = (sequelize, DataTypes) => {
  let Admin = sequelize.define('Admin', {
    title: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        return;
      }
    }
  });
  return Admin;
};
