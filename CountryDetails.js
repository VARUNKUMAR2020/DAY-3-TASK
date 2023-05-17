function printData() {
    const countries = JSON.parse(this.responseText);
    countries.forEach((country) => console.log(country.name));
    countries.forEach((country) => console.log(country.region));
    countries.forEach((country) => console.log(country.population));
    countries.forEach((country) => console.log(country.subregion));
}

var request = new XMLHttpRequest();
request.addEventListener("load", printData);
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();