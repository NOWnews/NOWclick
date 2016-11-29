import getHashedPassword from '../libs/getHashedPassword';
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
            unqiue: true,
        },
        hashedPassword: {
            type: DataTypes.CHAR(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            set: function(val) {
                let hashedPassword = getHashedPassword(val);
                this.setDataValue('password', val);
                this.setDataValue('hashedPassword', hashedPassword);
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
        },
        updatedBy: {
            type: DataTypes.CHAR(36, true),
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
