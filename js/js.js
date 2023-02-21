// URL api 
//const baseURl =  'http://api.weatherapi.com/v1/current.json';
//const keyAPI =  '?key=11ba738006df470d83b151908232102&q='; // Enter Api 
//let q = 'london';
//let urlApi = baseURl + keyAPI;
let content = document.getElementById('content');




// slected elemrnts HTMl
let search = document.getElementById('search');



let weathers = [];

function getData(q) {
  let req = new XMLHttpRequest();
  req.open('get', `http://api.weatherapi.com/v1/current.json?key=11ba738006df470d83b151908232102&q=${q}`);
  req.send();
  req.addEventListener("loadend", function(){
    if (req.status ==200) {
      weathers = JSON.parse(req.response);
      displayWeather()
    }
  });
}


function displayWeather() {
  let currentWeather = `

      <!-- col-1 -->
        <div class="col-md-4 bg-tem px-0 ">
            <div class="time bg-day d-flex justify-content-between align-items-center px-3 py-3">
              <div>monday</div>
              <div>20February</div>
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
              <div><img src="images/icon-umberella.png" alt="umberella"> 20%</div>
              <div><img src="images/icon-wind.png" alt="wind"> ${weathers.current.gust_kph}km/h</div>
              <div><img  style="transform: rotate(${windDegree(weathers.current.wind_dir)}deg)" src="images/icon-compass.png" alt="compass"> ${windDirection(weathers.current.wind_dir)}</div>
            </div>
        </div>
        <!-- col-2 -->
        <div class="col-md-4 px-0 bg-tem-center">
            <div class="time bg-day-center d-flex justify-content-center align-items-center px-3 py-3">
              <div>monday</div>
            </div>
            <div class="tem d-flex flex-column align-items-center gap-3  mt-5 pt-4">
              <div><img src="images/icon-umberella.png" alt="hhh"></div>
              <h3>15'C</h3>
              <div>10.4'C</div>
              <h5>windvb</h5>
            </div>
        </div>
        <!-- col-3 -->
        <div class="col-md-4 px-0 bg-tem">
            <div class="time bg-day d-flex justify-content-center align-items-center px-3 py-3">
              <div>monday</div>
            </div>
            <div class="tem d-flex flex-column align-items-center gap-3  mt-5 pt-4">
              <div><img src="images/icon-umberella.png" alt="hhh"></div>
              <h3>15'C</h3>
              <div>10.4'C</div>
              <h5>sunny</h5>
            </div>
        </div>
      <!-- end col-3 -->

  `

  content.innerHTML = currentWeather;
}

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
}
