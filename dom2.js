var link  = document.getElementsByTagName("a")[0];

link.innerHTML = "This is a link";

link.style.textDecoration = "none";

link.style.color = "green";

link.style.fontSize = "50px";

link.href = "https://google.com";





//creating html element

var heading3 = document.createElement("h1");
var text = document.createTextNode("This is a heading");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3);


//Remove html element

var heading2  = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2);