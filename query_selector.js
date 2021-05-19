//getElementById(),getElementsByClassName() sob gular kaj ekta method querySelector() er maddome kora jay
// just id er age # ar class er age (.) use korte hobe

var mypara1 = document.querySelector("#para");
mypara1.innerHTML = "querySelector";

var myh3 = document.querySelector(".heading3");
myh3.innerHTML = "querySelector2";


//getElementsByTagName() er kaj o kora jay er sahajje

var myh2 = document.querySelector("h2")
myh2.innerHTML = "This is changed";


document.querySelector("a").innerHTML = "New Text";
document.querySelector("ul li a").innerHTML = "New Text";
document.querySelector(".my-div a").innerHTML = "New Text";



//querySelectorAll etao  ager gular moto array er moto tai etay index number dite hibe
// ekhane h5 2 ta royece select korte gele index number use korte hobe

document.querySelectorAll("h5")[0].innerHTML = "Text Changed";
document.querySelectorAll("h5")[1].innerHTML = "Text Changed";