let form = document.querySelector(".js-form");
let current = document.querySelector(".js-current");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let currentElement = current.value;
  let currency = currencyElement.value;

  let eur = 4.67;
  let usd = 4.43;
  let gbp = 5.46;

  switch (currency) {
    case "eur":
      result = currentElement / eur;
      break;
    case "usd":
      result = currentElement / usd;
      break;
    case "gbp":
      result = currentElement / gbp;
      break;
  }
  resultElement.innerText = `${result.toFixed(2)} ${currency.toUpperCase()}`
});
