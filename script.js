let foods = document.getElementById("foods")
let dishs = document.getElementById("dishs")
let orders = document.getElementById("orders")

foods.addEventListener("click", function(){
    foods.style.color="red"
    dishs.style.color="white"
    orders.style.color="white"
})

dishs.addEventListener("click", function(){
    dishs.style.color="red"
    foods.style.color="white"
    orders.style.color="white"
})

orders.addEventListener("click", function(){
    orders.style.color="red"
    dishs.style.color="white"
    foods.style.color="white"
})

let logbtn = document.getElementById("logbtn");

logbtn.addEventListener("click", function(){
    document.querySelector(".login").style.display="block";
})

let loged = document.getElementById("logedbtn");

loged.addEventListener("click", function(){
    let email = document.getElementById("name");
    let password = document.getElementById("pass");

    if(email.value == "" || password.value == ""){
        alert("email and password requires");
        document.querySelector(".login").style.display="none";
    }
    else{
        alert("login successful");
        document.querySelector(".login").style.display="none";
    }
})

let tracking = document.getElementById("tracking");

tracking.addEventListener("click", function(){
    document.querySelector(".trackingmap").style.display="block";
    document.querySelector(".main").style.display="none";
    document.querySelector(".foodcards").style.display="none";
    document.querySelector(".dish").style.display="none";
    document.querySelector(".track").style.display="none";
})