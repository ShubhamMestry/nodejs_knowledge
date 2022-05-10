module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        
        CategoryName: {
            type: DataTypes.STRING,
        },
        CategoryCode: {
            type: DataTypes.INTEGER,
        },
        
        description: {
            type: DataTypes.STRING,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
        }
    }, {
            freezeTableName: true,
            allowNull: false,
            tableName: 'category',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

    return Category;
}
