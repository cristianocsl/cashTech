module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Users',
      [
        {
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailCheked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          casheforceAdm: 1,
        },
      ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
