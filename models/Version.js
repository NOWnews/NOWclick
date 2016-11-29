module.exports = (sequelize, DataTypes) => {
    let Version = sequelize.define('Version', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        deviceType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['BOX', 'IOS', 'ANDROID'],
        },
        version: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
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
                Version.belongsTo(models.Admin, {
                    foreignKey: 'createdBy'
                });
                Version.belongsTo(models.Admin, {
                    foreignKey: 'updatedBy'
                });
                return;
            }
        }
    });
    return Version;
};
