module.exports.User = (sequelize, DataTypes) => {
  const user = sequelize.define({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailCheked: DataTypes.TINYINT,
    casheforceAdm: DataTypes.TINYINT,
  });
  return user;
};