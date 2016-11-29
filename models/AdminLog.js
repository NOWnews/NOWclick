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
            comment: '索引值',
        },
        action: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['CREATE', 'UPDATE', 'DELETE'],
            comment: '操作動作',
        },
        content: {
            type: DataTypes.TEXT,
            comment: '調整內容',
        },
        objectId: {
            type: DataTypes.CHAR(36, true),
            comment: '異動Id（可能為空）',
        },
        tableName: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '異動資料表名稱',
        }
    }, {
        comment: '管理者後台操作 LOG',
        classMethods: {
            associate: (models) => {
                AdminLog.belongsTo(models.Admin);
                return;
            }
        }
    });
    return AdminLog;
};
