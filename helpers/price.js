export const buildFullPrices = (base, variants, currency) => {
  let prices = [];

  if (variants.length) {
    const sortedVariants = variants.sort((a, b) => {
      return a.additional_price - b.additional_price;
    });

    prices.push(Number(sortedVariants.at(0).additional_price) + Number(base));

    if (
      sortedVariants.length > 1 &&
      Number(sortedVariants.at(-1).additional_price) + Number(base) !==
        prices.at(0)
    ) {
      prices.push(
        Number(sortedVariants.at(-1).additional_price) + Number(base),
      );
    }
  } else {
    prices.push(base);
  }

  if (currency?.currency_code !== "UAH") {
    prices.forEach((price, i) => (prices[i] = convert(price, currency)));
  }

  prices.forEach((price, i) => (prices[i] = prettify(price, currency)));

  return prices.join(" - ");
};

function prettify(price, currency) {
  const result = [price];
  const symbol = currency.use_symbol
    ? currency.currency_symbol
    : currency.currency_code;
  const delimiter = currency.space_between ? " " : "";
  currency.symbol_position == "before"
    ? result.unshift(symbol)
    : result.push(symbol);

  return result.join(delimiter);
}

function convert(price, currency) {
  const converted = price * currency.rate * 2;
  return Math.ceil(converted) + 10 - (Math.ceil(converted) % 10);
}

export function finalPrettyPrice(price, currency) {
  let result = price;

  if (currency?.currency_code !== "UAH") {
    result = convert(result, currency);
  }

  return prettify(result, currency);
}
