const CURRENCY_API_KEY = "";

const dataList = document.querySelector("#currencies");

const fromInput = document.querySelector("#fromCurrency");

const toInput = document.querySelector("#toCurrency");

const amountInput = document.querySelector("#amount");

const convertBtn = document.querySelector("#convertBtn");

const switchBtn = document.querySelector("#switchBtn");

const result = document.querySelector("#result");

async function getCurrencies() {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/codes`,
    );
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();

    data.supported_codes.forEach((currency) => {
      const code = currency[0];
      const name = currency[1];
      const option = document.createElement("option");
      option.value = `${code} - ${name}`;
      dataList.appendChild(option);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function convertCurrency() {
  try {
    const amount = amountInput.value;

    const fromCode = fromInput.value.split(" - ")[0];
    const toCode = toInput.value.split(" - ")[0];

    const url = `https://v6.exchangerate-api.com/v6/${CURRENCY_API_KEY}/pair/${fromCode}/${toCode}/${amount}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

    result.textContent = `${amount} ${fromCode} = ${data.conversion_result} ${toCode}`;
  } catch (error) {
    console.error("Error:", error);
  }
}

convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const temp = fromInput.value;

  fromInput.value = toInput.value;

  toInput.value = temp;
  convertCurrency();
});
getCurrencies();
convertCurrency();
