module.exports.Order = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.TINYINT,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    buyerId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  });

  order.associate = (models) => {
    order.belongsTo(models.Cnpj,
      { foreignKey: 'cnpjId', as: 'cnpj' });
  
    order.belongsTo(models.User,
      { foreignKey: 'UserId', as: 'user' });

    order.belongsTo(models.Buyer,
      { foreignKey: 'BuyerId', as: 'buyer' });

    order.belongsTo(models.Provider,
      { foreignKey: 'ProviderId', as: 'provider' });
  };

  return order;
};