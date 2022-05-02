document.querySelector("form").addEventListener("submit",createAc);

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

var data = JSON.parse(localStorage.getItem("accounts"))||[];
function createAc(event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var number = document.querySelector("#number").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    // console.log(name,number,email,pass);

    if(name=="" || name[0]==" " || number=="" || number[0]==" " || email=="" || email[0]==" " || pass=="" || pass[0]==" ")
        alert("Empty or Invalid Input!");
    else
    {
        var info = {
            Name: name,
            Number: number,
            Email: email,
            Password: pass
        }
        data.push(info);
        localStorage.setItem("accounts",JSON.stringify(data));
        alert("Account created successfully");
        window.location = "login.html";
    }
}