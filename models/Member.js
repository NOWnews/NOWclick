import {
    getHashedPassword
} from '../libs/auth';
module.exports = (sequelize, DataTypes) => {
    let Member = sequelize.define('Member', {
        id: {
            type: DataTypes.CHAR(36, true),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        gender: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['NONE', 'BOY', 'GIRL'],
            defaultValue: 'NONE',
        },
        memo: DataTypes.STRING,
        hashedPassword: DataTypes.CHAR(50),
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            set: function(val) {
                let hashedPassword = getHashedPassword(val);
                this.setDataValue('password', val);
                this.setDataValue('hashedPassword', hashedPassword);
            }
        },
        phone: DataTypes.CHAR(10, true),
        username: DataTypes.STRING,
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
                Member.belongsTo(models.Admin, {
                    foreignKey: 'createdBy'
                });
                Member.belongsTo(models.Admin, {
                    foreignKey: 'updatedBy'
                });
                Member.hasMany(models.Device);
                return;
            }
        }
    });
    return Member;
};
