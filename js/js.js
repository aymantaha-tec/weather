// URL api 
//const baseURl =  'http://api.weatherapi.com/v1/current.json';
//const keyAPI =  '?key=11ba738006df470d83b151908232102&q='; // Enter Api 
//let q = 'london';
//let urlApi = baseURl + keyAPI;



// slected elemrnts HTMl
let search = document.getElementById('search');



let weathers = [];

function getData(q) {
  let req = new XMLHttpRequest();
  req.open('get', `http://api.weatherapi.com/v1/current.json?key=11ba738006df470d83b151908232102&q=${q}`);
  req.send();
  req.addEventListener("readystatechange", function(){
    if (req.readyState == 4 && req.status ==200) {
      weathers = JSON.parse(req.response);
      displayWeather()
    }
  });
}


function displayWeather() {
  console.log(weathers);
}

