const Order = (sequelize, DataTypes) => {
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
    models.Order.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });

    models.Order.belongsTo(models.Buyer,
      { foreignKey: 'buyerId', as: 'buyer' });

    models.Order.belongsTo(models.Provider,
      { foreignKey: 'providerId', as: 'provider' });

    models.Order.belongsTo(models.Cnpj,
      { foreignKey: 'cnpjId', as: 'cnpj' });
  };

  return order;
};

module.exports = Order;