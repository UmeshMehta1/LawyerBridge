module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define("Service", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2), // Use DECIMAL for monetary values
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true, // Optional field for service description
        },
    });

    return Service;
};