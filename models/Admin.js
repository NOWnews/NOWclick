module.exports = (sequelize, DataTypes) => {
  let Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.CHAR(36, true),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      set: (val) => {
        let salt = '';
        let passwordHash = `${salt}{$val}`;
        this.setDataValue('password', val);
        this.setDataValue('passwordHash', passwordHash);
      }
    },
    role: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['ADMIN', 'SYSTEM'],
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.CHAR(36, true),
      allowNull: false,
    },
    updatedBy: {
      type: DataTypes.CHAR(36, true),
      allowNull: false,
    }
  }, {
    classMethods: {
      associate: (models) => {
        Admin.hasMany(models.AdminLog);
        Admin.hasMany(models.Announce);
        Admin.hasMany(models.CustomerService);
        return;
      }
    }
  });
  return Admin;
};
