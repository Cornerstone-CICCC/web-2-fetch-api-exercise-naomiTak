// YOUR JS CODE HERE

const aa = document.querySelector(".result");

function showResult(result){
    const ul = document.createElement("ul");
    const temperature = document.createElement("li");
    //console.log(result.current);
    //temperature.innerText = data.current.temperature_2m;

    ul.appendChild(temperature);

    document.querySelector(".result").appendChild(ul);
}

async function getData(){
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
    const data = await res.json()
    console.log(data)
    console.log(data.current.temperature_2m);
    //return data

    const ul = document.createElement("ul");

    const temperature = document.createElement("li");
    temperature.innerText = `Temperature : ${data.current.temperature_2m}℃`;
    ul.appendChild(temperature);

    const windSpeed = document.createElement("li");
    windSpeed.innerText = `Wind speed : ${data.current.wind_speed_10m}Km/h`;
    ul.appendChild(windSpeed);

    const timeZone = document.createElement("li");
    timeZone.innerText = `Time zoon : ${data.timezone}`;
    ul.appendChild(timeZone);

    const lastUpdate = document.createElement("li");
    const updateTime = new Date(data.current.time)
    console.log(updateTime);
    lastUpdate.innerText = `Last updated : ${data.current.time}`;
    ul.appendChild(lastUpdate);

    document.querySelector(".result").appendChild(ul);
}

getData();