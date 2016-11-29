module.exports = (sequelize, DataTypes) => {
    let Device = sequelize.define('Device', {
        id: {
            type: DataTypes.CHAR(36, true),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        index: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
        },
        actived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        identifier: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        osVersion: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['BOX', 'IOS', 'ANDROID'],
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
                Device.belongsTo(models.Admin, {
                    foreignKey: 'createdBy'
                });
                Device.belongsTo(models.Admin, {
                    foreignKey: 'updatedBy'
                });
                Device.belongsTo(models.Member);
                return;
            }
        }
    });
    return Device;
};
