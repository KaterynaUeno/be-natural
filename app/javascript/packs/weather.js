
const weather = () => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=78753ac2829720b600f59b287f686674&units=metric';
  const city = document.querySelector('#city');
  const description = document.querySelector('#description');
  const temperature = document.querySelector('#temperature');
  const icon = document.querySelector('#icon');

  fetch(url)
  .then(response => response.json())
  .then((data) => {
    if (city) {
      city.innerHTML = data.name;
    }
    if (description) {
      description.innerHTML = data.weather[0].description;
    }
    if (temperature) {
      temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    }
    if (icon) {
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }
  });
}

export { weather };
