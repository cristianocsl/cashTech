module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Offers',
      [
        {
          id: 1,
          tax: null,
          tariff: null,
          adValorem: null,
          float: null,
          iof: null,
          expiresIn: null,
          paymentStatusSponsor: null,
          paymentStatusProvider: null,
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          orderId: 1,
          sponsorId: 1,
        },
      ],
    {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Offers', null, {});
  },
};
