module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderPortions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nDup: {
        type: Sequelize.STRING,
      },
      dVenc: {
        type: Sequelize.STRING,
      },
      vDup: {
        type: Sequelize.STRING,
      },
      availableToMarket: {
        type: Sequelize.TINYINT,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Orders',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('OrderPortions');
  },
};