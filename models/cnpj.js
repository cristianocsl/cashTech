const Cnpj = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('Cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return cnpj;
};

module.exports = Cnpj;