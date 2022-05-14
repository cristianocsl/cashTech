module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('OrderPortions',
      [
        {
          nDup: null,
          dVenc: null,
          vDup: null,
          availableToMarket: null,
          orderId: 1,
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
        },
      ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('OrderPortions', null, {});
  },
};
