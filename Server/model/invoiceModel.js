module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define("Invoice", {
      invoiceNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure each invoice has a unique number
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Client', // Assuming you have a Client model
          key: 'id',
        },
      },
      invoiceDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending', // Initial status could be 'pending', 'paid', 'overdue'
      },
    });
  
    // Define an association with the Service model (assuming you have one)
    Invoice.hasMany(Service, {
      foreignKey: 'invoiceId',
    });
    Service.belongsTo(Invoice, {
      foreignKey: 'invoiceId',
    });
  
    return Invoice;
  };