function loadRandomUsers() {
  fetch("https://reqres.in/api/users", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));

  console.log("Using promises");
}
loadRandomUsers();

async function loadRandomUsers1() {
  let response = await fetch("https://reqres.in/api/users");
  let data = await response.json();
  console.log("data", data);
  console.log("Using Async");
}
loadRandomUsers1();

async function loadRandomCat() {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let data = await response.json();
  console.log("data", data);
  //first img
  let firstitem = data[0].url;
  console.log("firstItem", firstitem);
  //getting the element from html
  let element = document.querySelector(".catImg");
  //adding to catImg class in thml to display the img in html
  element.src = firstitem;
}
loadRandomCat();

async function loadExchangerates() {
  let response = await fetch(
    "https://rest.coinapi.io/v1/exchangerate/BTC/USD",
    {
      method: "GET",
      headers: {
        "X-CoinAPI-Key": "1A169B92-2C03-42F7-AA45-62E3249B3692",
      },
    }
  );
  let data = await response.json();
  console.log("data", data);
}

loadExchangerates();
