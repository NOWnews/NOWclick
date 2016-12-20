import getHashedPassword from '../libs/getHashedPassword';
module.exports = (sequelize, DataTypes) => {
    let Manager = sequelize.define('Manager', {
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unqiue: true,
            comment: '信箱（登入帳號）',
        },
        hashedPassword: {
            type: DataTypes.CHAR(50),
            allowNull: false,
            comment: '加密後密碼',
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            set: function(val) {
                let hashedPassword = getHashedPassword(val);
                this.setDataValue('password', val);
                this.setDataValue('hashedPassword', hashedPassword);
            },
            comment: '原始密碼傳入後會轉換成加密（此欄位為虛擬不會真實存在）',
        },
        role: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Manager', 'SYSTEM'],
            comment: '角色（背景系統行為會使用SYSTEM，後台操作用Manager）',
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '使用者名稱(登入後顯示名稱)',
        },
        createdBy: {
            type: DataTypes.CHAR(36, true),
            comment: '建立者',
        },
        updatedBy: {
            type: DataTypes.CHAR(36, true),
            comment: '最後更新者',
        }
    }, {
        comment: '後台管理者資料表',
        classMethods: {
            associate: (models) => {
                Manager.hasMany(models.AdminLog);
                // Manager.hasMany(models.Announce);
                Manager.hasMany(models.CustomerService);
                return;
            }
        }
    });
    return Manager;
};
