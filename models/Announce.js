import moment from 'moment-timezone';

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
            comment: '索引值',
        },
        actived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: '是否啟用',
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '公告內容',
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '公告結束時間',
            get: function (column) {
                let val = this.getDataValue(column);
                return moment(val).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        startTime: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '公告發布時間',
            get: function (column) {
                let val = this.getDataValue(column);
                return moment(val).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['COMMON', 'COMPENSATE', 'SHUTDOWN_SERVER', 'ACTIVITY'],
            defaultValue: 'COMMON',
            comment: '公告類型',
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
        comment: '佈告欄',
        classMethods: {
            associate: (models) => {
                Announce.belongsTo(models.Admin, { foreignKey: 'createdBy' });
                Announce.belongsTo(models.Admin, { foreignKey: 'updatedBy' });
                return;
            }
        }
    });
    return Announce;
};
