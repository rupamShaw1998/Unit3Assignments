document.querySelector("#home").addEventListener("click",home);
document.querySelector("#sign").addEventListener("click",sign);
document.querySelector("#log").addEventListener("click",log);


function home() {
    window.location = "index.html";
}
function sign() {
    window.location = "signup.html";
}
function log() {
    window.location = "login.html";
}

var imgData = ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Reacher_Launch/2724930f-a6c4-4484-93ba-716b43fbb91d._UR3000,600_SX1500_FMwebp_.jpeg",
               "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MoneyMafiaS2_DP_V2/cffd6c07-edd4-4341-a8d5-0195cecf170a._UR3000,600_SX1500_FMwebp_.jpeg",
               "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Bitcoin_DB/9678cde6-ebbf-4c32-a17a-4545cef43000._UR3000,600_SX1500_FMwebp_.jpeg"];

let img = document.querySelector("#slideshow>img");
let i=0;

var x = setInterval(function () {
    if(i==imgData.length)
        i=0;
    img.src = imgData[i];
    i++;
},3600);

var movies_data = JSON.parse(localStorage.getItem("movies"));
console.log(movies_data);

function appendMovies(movies_data) {
    document.getElementById("movies").innerHTML="";
    movies_data.map(function (ele) {
        let div = document.createElement("div");
    
        let img = document.createElement("img");
        img.src= ele.Poster;
    
        let name = document.createElement("h5");
        name.innerText= ele.Title;
    
        let r_date = document.createElement("p");
        r_date.innerText = "Release: "+ele.Year;
    
        let imdb = document.createElement("p");
        imdb.innerText = "IMDB: "+ele.imdbID;
    
        div.append(img, name, r_date, imdb);
        document.getElementById("movies").append(div);
    });
}

appendMovies(movies_data);

function sortMovies() {
    let select = document.getElementById("sort").value;
    
    if(select=="lh")
    {
        movies_data.sort(function (a,b) {
            return a.imdbID-b.imdbID;
        });
    }
    else if(select=="hl") {
        movies_data.sort(function (a,b) {
            return b.imdbID-a.imdbID;
        });
    }
    appendMovies(movies_data);
}

