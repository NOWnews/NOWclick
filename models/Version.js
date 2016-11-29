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
            comment: '設備類型',
        },
        version: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
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
