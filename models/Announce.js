module.exports = (sequelize, DataTypes) => {
    let Announce = sequelize.define('Announce', {
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
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.DATE,
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
                Announce.belongsTo(models.Admin, {
                    foreignKey: 'createdBy'
                });
                Announce.belongsTo(models.Admin, {
                    foreignKey: 'updatedBy'
                });
                return;
            }
        }
    });
    return Announce;
};
