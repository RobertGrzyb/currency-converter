
const calculateResult = (amount, currency) => {
  const rateEUR = 4.86;
  const rateUSD = 4.95;
  const rateGBP = 5.52;

  switch (currency) {
    case "EUR":
      return amount / rateEUR;

    case "USD":
      return amount / rateUSD;

    case "GBP":
      return amount / rateGBP;
  }
};

  const init = () => {
  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");

    const amount = Number(amountElement.value);
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    resultElement.innerHTML = `Wymieniając: ${amount.toFixed(2)} PLN /
    Otrzymasz: ${result.toFixed(2)} ${currency}`;
  });
  };

  init();