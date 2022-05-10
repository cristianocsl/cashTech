module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Sponsors',
      [
        {
          id: 1,
          name: 'PATROCINADOR 01',
          tradingName: 'PATROCINADOR 01 LTDA',
          cashforceTax: '0',
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          bank: null,
          bankAgency: null,
          account: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33',
          cnpjId: 1,
          email: null,
        },
      ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Sponsors', null, {});
  },
};
