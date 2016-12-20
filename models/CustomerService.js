module.exports = (sequelize, DataTypes) => {
    let CustomerService = sequelize.define('CustomerService', {
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
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: '發生時間',
        },
        description: {
            type: DataTypes.TEXT,
            comment: '問題描述',
        },
        memo: {
            type: DataTypes.TEXT,
            comment: '備註',
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['OPEN', 'PROCESS', 'RESOLVE', 'REJECT', 'PENDING'],
            defaultValue: 'OPEN',
            comment: '工單狀態',
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '問題標題',
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['DEVICE', 'USER', 'OTHER'],
            comment: '問題類型',
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
        comment: '客服工單',
        classMethods: {
            associate: (models) => {
                CustomerService.belongsTo(models.Manager, { foreignKey: 'ManagerId' });
                CustomerService.belongsTo(models.Manager, { foreignKey: 'createdBy' });
                CustomerService.belongsTo(models.Manager, { foreignKey: 'updatedBy' });
                CustomerService.belongsTo(models.User, { foreignKey: 'UserId' });
                return;
            }
        }
    });
    return CustomerService;
};
