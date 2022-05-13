const { format, parseISO } = require('date-fns');

const REQUIRED_FORMAT = 'dd/MM/yyyy';

const convertOneDate = (date) => format(parseISO(date), REQUIRED_FORMAT);

const convertDateFormat = async (tasks) => tasks.map(({ dataValues }) => ({
  ...dataValues,
  emissionDate: convertOneDate(dataValues.emissionDate),
}));

module.exports = { convertDateFormat, convertOneDate };