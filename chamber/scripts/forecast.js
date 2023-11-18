const forecast = document.querySelector('#forecast');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); 

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.38&lon=-122.23&units=imperial&appid=882239ba366a5a3b0949861a5a43fb84';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    forecast.innerHTML = `${data.main.list.temp}&deg;F`;
    const iconsrc= `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('main', `${data.weather.main}`);
    captionDesc.textContent = `${desc}`;
}