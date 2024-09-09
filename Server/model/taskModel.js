module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("task", {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['Pending', 'In Progress', 'Completed']], // Example statuses
        },
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['Low', 'Medium', 'High', 'Urgent']], 
        },
      },
      assignTo: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), // Assuming multiple users can be assigned
        allowNull: true,
        references: {
          model: 'TeamMembers',
          key: 'id',
        },
      },
      relatedTo: {
        type: DataTypes.INTEGER,
        allowNull: true, // Optional relation to another entity like a case
        references: {
          model: 'Cases',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    return Task;
  };
  