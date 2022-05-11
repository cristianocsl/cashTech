module.exports.Cnpj = (sequelize, DataTypes) => {
  const cnpj = sequelize.define({
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  cnpj.associate = (models) => {
    cnpj.hasMany(models.Order,
      { foreignKey: 'OrderId', as: 'order' });
  };

  return cnpj;
};