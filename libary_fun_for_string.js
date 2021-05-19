var text = "Bangladesh";

var len = text.length;
document.write("Number of Character "+ len);

document.write("<br>Number at position 3 = " +text.charAt(2));

text=text.toUpperCase();
document.write("<br> Uppercase = "+text);


text=text.toLowerCase();
document.write("<br> Lowercase = "+text);


var name  = prompt("Enter Your name :");
document.write("<br>Number of Character Name is "+ name.length);

 var txt1= "Bangladesh";
 var txt2= " is a beautyful country<br>";

 document.write(txt1.concat(txt2));

 var slice =txt1.slice(2,5);
 document.write(slice);