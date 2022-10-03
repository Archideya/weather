"use strict";
const weathers = document.querySelector(".wethers");

const renderWeather = function (data) {
  const html = `
    <div class="main container border border-3">
    <h3 class="text-white text-center text-capitalize fs-5">Uzbekistan, Tashkent</h3>
    <div class="sec d-flex justify-content-around align-items-center">
      <div class="text-center">
        <i
          data-api="current_icon"
          class="fas fa-sun fa-4x text-warning"
        ></i>
        <p class="text-white fz-3 text-capitalize sub">${data.description}</p>
      </div>
      <p class="text-white fs-2">${data.temperature}</p>
      <p class="text-white fz-4">wind:${data.wind}</p>
    </div>
    <div class="d-flex justify-content-between align-items-center day">
      <div class="text-center">
        <h4 class="text-white text-uppercase">sun</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">mon</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">tue</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">wed</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">thur</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">grad</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">fri</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
      <div class="text-center">
        <h4 class="text-white text-uppercase">sat</h4>
        <i data-api="current_icon" class="fas fa-sun text-warning icon"></i>
        <h5 class="text-white">${data.temperature}</h5>
      </div>
    </div>
  </div>
    `;

  weathers.insertAdjacentHTML("beforeend", html);
};

const getWeather = function (country) {
  const request = fetch(`https://goweather.herokuapp.com/weather/{country}`)
    .then((response) => response.json())
    .then((data) => renderWeather(data));
  return request;
};
getWeather("uzbekistan");
