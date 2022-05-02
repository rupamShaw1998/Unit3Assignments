const key = "03acdf4358b9a3919bf89a1933d392c1";

async function getWeatherData() {
    try {
        let city = document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        let data = await res.json();
        let res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&cnt=7&units=metric`);
        let weekData = await res2.json();
        weekData = weekData.list;
        var date = new Date();
        var day = date.getDay();
        console.log(day)
        var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        for(let i=0; i<7; i++) 
        {
            if(day>6)
                day=0;
            weekData[i].main.day = weekDays[day];
            day++;
        }
        console.log(weekData);
        showWeather(data, weekData);
    } catch(err) {
        console.log("Error:", err);
    }   
}

let week = document.getElementById("week");
let iframe = document.getElementById("gmap_canvas");
var clear = "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-6.jpg";
var cloudy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_Rcj2tAPhkCEssL2pdGBNxFk1shyq-s_qQ&usqp=CAU";
var rainy = "https://image.shutterstock.com/image-vector/cloud-rainy-sky-isolated-icon-260nw-759608053.jpg";

function showWeather(data, weekData) {
    document.getElementById("container").innerHTML=null;

    let name = document.createElement("h3");
    name.innerText = data.name;

    let temp = document.createElement("p");
    temp.innerText = `Temp: ${data.main.temp}°C`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity: ${data.main.humidity}`;

    let pressure = document.createElement("p");
    pressure.innerText = `Pressure: ${data.main.pressure}`;

    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    week.innerHTML = null;
    weekData.forEach(function (ele) {      
        let div = document.createElement("div");
        
        let weekDay = document.createElement("h5");
        weekDay.innerText = ele.main.day;

        let icon = document.createElement("img");
        if(ele.weather[0].main == "Rain")
            icon.src = rainy;
        else if(ele.weather[0].main == "Clouds")
            icon.src = cloudy;
        else
            icon.src = clear;
        let max = document.createElement("h5");
        max.innerText = `${Math.round(ele.main.temp_max)}°C`;
       
        let min = document.createElement("h5");
        min.innerText = `${Math.round(ele.main.temp_min)}°C`;

        div.append(weekDay, icon, max, min);
        week.append(div);
    })

    document.getElementById("container").append(name,temp,humidity,pressure);
}