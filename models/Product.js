module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        
        ProductName: {
            type: DataTypes.STRING,
        },
        ProductCode: {
            type: DataTypes.INTEGER,

        },
        description: {
            type: DataTypes.STRING,
        },
        CategoryId: {
            type: DataTypes.INTEGER,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        }
    }, {
            freezeTableName: true,
            allowNull: false,
            tableName: 'product',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

        Product.associate = function (models) {
            Product.belongsTo(models.category, { foreignKey: 'CategoryId', as: 'category' });
        }

    return Product;
}



