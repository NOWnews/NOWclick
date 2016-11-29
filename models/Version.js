module.exports = (sequelize, DataTypes) => {
    let Version = sequelize.define('Version', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        apkUrl: {
            type: DataTypes.TEXT,
            comment: '安裝包網址',
        },
        deviceType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['BOX', 'IOS', 'ANDROID'],
            comment: '設備類型',
        },
        publishedDate: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '發布日期',
        },
        version: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '版本號',
        },
        createdBy: {
            type: DataTypes.CHAR(36, true),
            allowNull: false,
            comment: '建立者',
        },
        updatedBy: {
            type: DataTypes.CHAR(36, true),
            allowNull: false,
            comment: '最後更新者',
        }
    }, {
        comment: '設備的最新版本紀錄',
        classMethods: {
            associate: (models) => {
                Version.belongsTo(models.Admin, { foreignKey: 'createdBy' });
                Version.belongsTo(models.Admin, { foreignKey: 'updatedBy' });
                return;
            }
        }
    });
    return Version;
};
