
function printData() {
    const countries = JSON.parse(this.responseText);
    countries.forEach((country) => console.log(country.flags.png));
  }
  
  var request = new XMLHttpRequest();
  request.addEventListener("load", printData);
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send();