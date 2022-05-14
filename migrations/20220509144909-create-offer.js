module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        type: Sequelize.STRING,
      },
      tariff: {
        type: Sequelize.STRING,
      },
      adValorem: {
        type: Sequelize.STRING,
      },
      float: {
        type: Sequelize.STRING,
      },
      iof: {
        type: Sequelize.STRING,
      },
      expiresIn: {
        type: Sequelize.DATE,
      },
      paymentStatusSponsor: {
        type: Sequelize.TINYINT,
      },
      paymentStatusProvider: {
        type: Sequelize.TINYINT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
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
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Sponsors',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Offers');
  },
};