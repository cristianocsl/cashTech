module.exports.Orderportion = (sequelize, DataTypes) => {
  const orderportion = sequelize.define({
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.TINYINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
  });
  return orderportion;
};