module.exports.Offer = (sequelize, DataTypes) => {
  const offer = sequelize.define('Offer', {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    orderId: DataTypes.INTEGER,
    sponsorId: DataTypes.INTEGER,
  });
  return offer;
};