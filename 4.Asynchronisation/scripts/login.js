document.querySelector("form").addEventListener("submit",logIn);

document.querySelector("#home").addEventListener("click",home);
document.querySelector("#sign").addEventListener("click",sign);
document.querySelector("#log").addEventListener("click",log);

var info = JSON.parse(localStorage.getItem("accounts"))||[];

function home() {
    window.location = "index.html";
}
function sign() {
    window.location = "signup.html";
}
function log() {
    window.location = "login.html";
}

function logIn(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    if(email=="" || email[0]==" " || pass=="")
        alert("Empty or Invalid Input!");
    else
    {
        var flag=false;
        for(var i=0; i<info.length; i++)
        {
            if(info[i].Email==email && info[i].Password==pass)
            {
                alert("Login Successful");
                flag=true;
                break;
            }
        }
        console.log(flag);
        if(flag==true)
            window.location = "index.html";
        else
            alert("Incorrect Email or Password!");
    } 
}