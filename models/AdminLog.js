module.exports = (sequelize, DataTypes) => {
    let AdminLog = sequelize.define('AdminLog', {
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
        action: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['CREATE', 'UPDATE', 'DELETE']
        },
        content: DataTypes.TEXT,
        objectId: DataTypes.CHAR(36, true),
        tableName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        classMethods: {
            associate: (models) => {
                AdminLog.belongsTo(models.Admin);
                return;
            }
        }
    });
    return AdminLog;
};
