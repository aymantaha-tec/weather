//  by Ayman Taha
//   2/21/2023 

    

// URL api 
const baseURl =  'http://api.weatherapi.com/v1/forecast.json';
const keyAPI =  '?key=11ba738006df470d83b151908232102&q='; // Enter Api 
let city = 'cairo';        //  change "cairo" to "City forecast when the site opens"
let urlApi = baseURl + keyAPI;

let contentWeather = document.getElementById('content-weather');


// slected elemrnts HTMl
let search = document.getElementById('search');
let allList = document.querySelectorAll("ul li a");
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


let weathers = [];

//function is using the XMLHttpRequest API to make a GET request to the specified URL
function getData(q) {
  let req = new XMLHttpRequest();
  req.open('get', `${urlApi}${q}&days=3`);
  req.send();
  req.addEventListener("loadend", function(){
    if (req.status ==200) {
      weathers = JSON.parse(req.response);
      displayWeather();
      console.log(req)
    }
  });
};

getData(city);

// Used to display the current date of the API ex "2-27-2023"
function d(){
  let d =  new Date (weathers.location.localtime);
  return d;
}

// Used to display the current day of the API ex: "Sunday"
function getCurrentDay(){
  let day =  days[d().getDay()];
  console.log(day);
  return day;
};

//Used to display the tomorrow day of the API ex: "Monday"
function getTomorrowDay(){
  let tomorrow =  days[d().getDay()+1];
  if (days[d().getDay()+1]== undefined){
    tomorrow = days[0];
  }
  return tomorrow;
};

//Used to display the after tomorrow day of the API ex: "Tuesday"
function getAfterTomorrowDay(){
  let afterTomorrow =  days[d().getDay()+2];
  if(days[d().getDay()+2] == undefined){
    afterTomorrow =  days[0];
  }
  console.log(afterTomorrow);
  return afterTomorrow;
};

// Used for convert day as number "from 0 to 6 " to "Sunday to Saturday "
function getCurrentDayAsNumber(){
  let day = d().getDate();
  return day;
}

// Used to display the current month of the API ex: "August"
function getCurrentMonth (){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let month =  months[d().getDay()];
  return month;
}

// Used to display All data to web site
function displayWeather() {
  let currentWeather = `
      <!-- col-1 -->
        <div class="col-md-4 bg-tem px-0 ">
          <div class="time bg-day d-flex justify-content-between align-items-center px-3 py-3">
            <div>${getCurrentDay ()}</div>
            <div>${getCurrentDayAsNumber ()} ${getCurrentMonth ()}</div>
          </div>
          <div class=" tem px-3 py-4">
            <h4>${weathers.location.name}</h4>
            <div class="d-flex flex-column" >
              <h3 class="tem-dgree">${weathers.current.temp_c}&deg C</h3>
            <div><img class="icon-current" src="${weathers.current.condition.icon}" alt="umberella"></div>
            </div>
            <h5>${weathers.current.condition.text}</h5>
          </div>
          <div class="detialis px-3 py-4 d-flex gap-3">
            <div><img src="images/icon-umberella.png" alt="umberella"> ${weathers.current.humidity}%</div>
            <div><img src="images/icon-wind.png" alt="wind"> ${weathers.current.gust_kph}km/h</div>
            <div><img  style="transform: rotate(${windDegree(weathers.current.wind_dir)}deg)" src="images/icon-compass.png" alt="compass"> ${windDirection(weathers.current.wind_dir)}</div>
          </div>
        </div>
        <!-- col-2 -->
        <div class="col-md-4 px-0 bg-tem-center">
          <div class="time bg-day-center d-flex justify-content-center align-items-center px-3 py-3">
            <div>${getTomorrowDay()}</div>
          </div>
          <div class="tem d-flex flex-column align-items-center gap-3  mt-5 pt-4">
            <div><img src="${weathers.forecast.forecastday[1].day.condition.icon}" alt="hhh"></div>
            <h3>${weathers.forecast.forecastday[1].day.maxtemp_c}&deg C</h3>
            <div>${weathers.forecast.forecastday[1].day.mintemp_c}&deg C</div>
            <h5>${weathers.forecast.forecastday[1].day.condition.text}</h5>
          </div>
        </div>
        <!-- col-3 -->
        <div class="col-md-4 px-0 bg-tem">
          <div class="time bg-day d-flex justify-content-center align-items-center px-3 py-3">
            <div>${getAfterTomorrowDay()}</div>
          </div>
          <div class="tem d-flex flex-column align-items-center gap-3  mt-5 pt-4">
            <div><img src="${weathers.forecast.forecastday[2].day.condition.icon}" alt="hhh"></div>
            <h3>${weathers.forecast.forecastday[2].day.maxtemp_c}&deg C</h3>
            <div>${weathers.forecast.forecastday[2].day.mintemp_c}&deg C</div>
            <h5>${weathers.forecast.forecastday[2].day.condition.text}</h5>
          </div>
        </div>
      <!-- end col-3 -->
  `
  contentWeather.innerHTML = currentWeather;
  
};


// Used for  convert wind direction from short to full name ex: "N to north"
function windDirection(windDir) {
  if (windDir == 'N') {
    return windDir = "North"
  }
  else if (windDir == 'E') {
    return windDir = "East"
  }
  else if (windDir == 'S') {
    return windDir = "South"
  }
  else if (windDir == 'W') {
    return windDir = "West"
  }

  else if (windDir == 'NE') {
    return windDir = "North-East"
  }
  else if (windDir == 'SE') {
    return windDir = "South-East"
  }
  else if (windDir == 'SW') {
    return windDir = "South-West"
  }
  else if (windDir == 'NW') {
    return windDir = "North-West"
  }

  else if (windDir == 'NNE') {
    return windDir = "North-NorthEast"
  }
  else if (windDir == 'ENE') {
    return windDir = "East-NorthEast"
  }
  else if (windDir == 'ESE') {
    return windDir = "East-SouthEast"
  }
  else if (windDir == 'SSE') {
    return windDir = "South-SouthEast"
  }

  else if (windDir == 'WSW') {
    return windDir = "West-southWest"
  }
  else if (windDir == 'SSW') {
    return windDir = "south-southWest"
  }
  else if (windDir == 'WNW') {
    return windDir = "West-NorthWest"
  }
  else if (windDir == 'NNW') {
    return windDir = "North-NorthWest"
  }
};

//  The change of the icon according to the direction of the wind depends on  function  windDirection
function windDegree(degree) {
  if (degree == 'N') {
  return degree = 0;
  }
  else if (degree == 'E') {
    return degree = 90;
  }
  else if (degree == 'S') {
    return degree = 180;
  }
  else if (degree == 'W') {
    return degree = 270;
  }

  else if (degree == 'NE') {
    return degree = 45;
  }
  else if (degree == 'SE') {
    return degree = 135;
  }
  else if (degree == 'SW') {
    return degree = 225;
  }
  else if (degree == 'NW') {
    return degree = 315;
  }

  else if (degree == 'NNE') {
    return degree = 22.5
  }
  else if (degree == 'ENE') {
    return degree = 67.5
  }
  else if (degree == 'ESE') {
    return degree = 112.5
  }
  else if (degree == 'SSE') {
    return degree = 157.5
  }

  else if (degree == 'WSW') {
    return degree = 247.5
  }
  else if (degree == 'SSW') {
    return degree = 202.5
  }
  else if (degree == 'WNW') {
    return degree = 292.5
  }
  else if (degree == 'NNW') {
    return degree = 337.5
  }
};



allList.forEach(ele => {
  ele.onclick =function(){
    // Remove Avtion Class From All Elements
    allList.forEach(ele => {
      ele.classList.remove("current-active")
    });
    // Add Active Class To This Element
    this.classList.add('current-active')
  };
});

