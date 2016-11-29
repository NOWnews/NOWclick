import getHashedPassword from '../libs/getHashedPassword';

module.exports = (sequelize, DataTypes) => {
    let Member = sequelize.define('Member', {
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
        address: {
            type: DataTypes.STRING,
            comment: '地址',
        },
        email: {
            type: DataTypes.STRING,
            comment: '信箱',
        },
        gender: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['NONE', 'BOY', 'GIRL'],
            defaultValue: 'NONE',
            comment: '性別',
        },
        hashedPassword: {
            type: DataTypes.CHAR(50),
            comment: '加密後密碼',
        },
        memo: {
            type: DataTypes.STRING,
            comment: '備註',
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
        phone: {
            type: DataTypes.CHAR(10, true),
            comment: '電話（中間不含任何符號，例如： - ）',
        },
        username: {
            type: DataTypes.STRING,
            comment: '姓名',
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
        comment: '會員資料表',
        classMethods: {
            associate: (models) => {
                Member.hasMany(models.CustomerService);
                Member.belongsTo(models.Admin, { foreignKey: 'createdBy' });
                Member.belongsTo(models.Admin, { foreignKey: 'updatedBy' });
                Member.hasMany(models.Device);
                return;
            }
        }
    });
    return Member;
};
