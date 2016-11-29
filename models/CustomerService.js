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
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        memo: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['OPEN', 'PROCESS', 'RESOLVE', 'REJECT', 'PENDING'],
            defaultValue: 'OPEN',
        },
        type: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['DEVICE', 'MEMBER', 'OTHER'],
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
                CustomerService.belongsTo(models.Admin, {
                    foreignKey: 'createdBy'
                });
                CustomerService.belongsTo(models.Admin, {
                    foreignKey: 'updatedBy'
                });
                return;
            }
        }
    });
    return CustomerService;
};
