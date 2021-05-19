//DOM = Document Object Model

//getElementById()     ei method er kaj hocce id er maddome html tag ta ke select kora
// innerHTML  etar kaj element er value change kora

var myheading1 = document.getElementById("heading1");
myheading1.innerHTML = "Heading";

var mypara1 = document.getElementById("para");
mypara1.innerHTML = "Paragraph";


//getElementsByTagName()    eta diye direct html er tag niye kaj kora jay tobe ekane er index number bole dite hobe array er moto orthat
// first je h2 use koreci tar index 0 er por barte thakbe

var myh2 = document.getElementsByTagName("h2")[0]
myh2.innerHTML = "getElementsByTagName";

//getElementsByClassName() etar kaj o same to same getElementsByTagName() er moto.
//jodi eker odik same name class thake tahole index number use korte hobe

var myh3 = document.getElementsByClassName("heading3")[0]
myh3.innerHTML = "getElementsByClassName";





