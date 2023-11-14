const currentTemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption'); 

const url = 'https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&appid={882239ba366a5a3b0949861a5a43fb84}&units=imperial';

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
    currentTemp.innerHTML = '${data.temp}&deg;F';
    const iconsrc= 'https://openweathermap.org/img/wn/${icon}.png';
    let desc = data.weather[0].description;
    captionDesc.textContent = '${desc}';
}