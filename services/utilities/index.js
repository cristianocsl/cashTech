const { format, parseISO } = require('date-fns');

const statusList = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
];

const REQUIRED_FORMAT = 'dd/MM/yyyy';

const convertOneDate = (date) => format(parseISO(date), REQUIRED_FORMAT);

const convertDateFormat = async (tasks) => tasks.map(({ dataValues }) => ({
  ...dataValues,
  emissionDate: convertOneDate(dataValues.emissionDate),
}));

const formatCoin = (value) => {
  const cents = value.substring(value.length - 2, value.length);
  const hundreds = value.substring(value.length - 5, value.length - 2);
  const thousands = value.substring(value.length - 8, value.length - 5);
  return `${thousands}.${hundreds},${cents}`;
};

const setProperties = (list) => {
  const status = list.map((item) => ({
    ...item,
    orderStatusBuyer: statusList[item.orderStatusBuyer],
    value: `R$ ${formatCoin(item.value)}`,
  }));
  return status;
};

module.exports = { convertDateFormat, convertOneDate, setProperties };