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
            comment: '索引值',
        },
        actived: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: '是否啟用（激活、換 Device 之後舊的 Deivce 就要關掉）',
        },
        identifier: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '識別碼（iOS:UUID, Android:AndroidId, BOX:MAC Address)',
        },
        model: {
            type: DataTypes.STRING,
            comment: '機器型號（ex: nexus, samsung ... ）',
        },
        osVersion: {
            type: DataTypes.STRING,
            comment: '作業系統版本（ex: 3.3, 10.0 ... ）',
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '推播Token',
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['BOX', 'IOS', 'ANDROID'],
            comment: '設備類型',
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
        comment: '機器設備',
        classMethods: {
            associate: (models) => {
                Device.belongsTo(models.Admin, { foreignKey: 'createdBy' });
                Device.belongsTo(models.Admin, { foreignKey: 'updatedBy' });
                Device.belongsTo(models.User);
                return;
            }
        }
    });
    return Device;
};
