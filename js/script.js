
const calculateResult = (amount, currency) => {
  const rateEUR = 4.67;
  const rateUSD = 4.43;
  const rateGBP = 5.46;

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

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    resultElement.innerHTML = `Wymieniasz: ${amount.toFixed(2)} PLN /
    Otrzymasz: ${result.toFixed(2)} ${currency}`;
  });
  };

  init();