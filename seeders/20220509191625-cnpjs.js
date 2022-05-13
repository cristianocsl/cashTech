module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Cnpjs',
    [
      {
        cnpj: '00000000000002',
        companyType: '2',
        createdAt: '2020-10-29 21:20:32',
        updatedAt: '2020-10-29 21:20:33',
      },
      {
        cnpj: '00000000000001',
        companyType: '1',
        createdAt: '2020-10-29 21:20:33',
        updatedAt: '2020-10-29 21:20:34',
      },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Cnpjs', null, {});
  },
};
