var burger = document.getElementById("burger");
var nuggets = document.getElementById("nuggets");
var fries = document.getElementById("fries");
var coldDrinks = document.getElementById("coldDrinks");
var cappuccino = document.getElementById("cappuccino");

function order() {
    var menu = [];
    var n = Math.round(Math.random()*100);
    if(burger.checked)
        menu.push("https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg");
    if(nuggets.checked)
        menu.push("https://static.toiimg.com/thumb/83114901.cms?imgsize=1443171&width=800&height=800");
    if(fries.checked)
        menu.push("https://kirbiecravings.com/wp-content/uploads/2019/09/easy-french-fries-1.jpg");
    if(coldDrinks.checked)
        menu.push("https://wallpaperaccess.com/full/3410620.jpg");
    if(cappuccino.checked)
        menu.push("https://c8.alamy.com/comp/2D90JAM/simple-serving-of-cuppuccino-coffee-with-heart-shaped-flower-art-2D90JAM.jpg");
    
    var myPromise = new Promise(function (resolve, reject) {
        if(menu.length==0)
            reject();
        else
            resolve();
    })

    myPromise.then(function () {
        alert("Your order is successful");
        document.getElementById("container").innerHTML = null;
        setTimeout(function () {
            alert(`Your order number: ${n} is ready`);
            document.querySelector("h2").innerText = `Order number: ${n}`;
            menu.forEach(function (ele) {
                let img = document.createElement("img");
                img.src = ele;
                document.getElementById("container").append(img);
            })
        }, 5000);
    })
}