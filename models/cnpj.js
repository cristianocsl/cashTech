module.exports.Cnpj = (sequelize, DataTypes) => {
  const cnpj = sequelize.define({
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  return cnpj;
};