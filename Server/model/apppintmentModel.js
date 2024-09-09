module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define("Appointment", {
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id',
        },
      },
      mobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY, // To capture the date part
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME, // To capture the time part
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional field
      },
      isNewClient: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Tracks if it's a new client or existing one
      },
    });
  
    return Appointment;
  };
  