function setup() {
  loadJSON("https://api.coindesk.com/v1/bpi/currentprice.json", gotData);
}

function gotData(data){
  document.getElementById('btcValueUSD').innerHTML = "USD " + data.bpi.USD.rate;
  document.getElementById('btcValueGBP').innerHTML = "GBP " + data.bpi.GBP.rate;
  document.getElementById('btcValueEUR').innerHTML = "EUR " + data.bpi.EUR.rate;
}
