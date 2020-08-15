const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const salFormatter = (value) => formatter.format(value);

export { salFormatter };
