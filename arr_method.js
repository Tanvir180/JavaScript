var names = ["Tanvir","Ahammed","Hridoy","Tazim"];
console.log(names);

//pop sesr element delete kore
names.pop();
console.log(names);

//shift opposite of pop
names.shift();
console.log(names);

//push seser dike element gog kore
names.push("Tazim");
console.log(names);

//unshift push er ulta
names.unshift("Tanvir");
console.log(names);

//splice er kaj holo maje kono value add koora jay.....first er onser kaj koto number index theke value add suru hobe, then porer tar kaj koyta remove korbo seser dik theke then value

names.splice(2,2,"karim","Rahim");
console.log(names);

// slice method new array toiri kore element remove kore ager array er kono poriborton kore na
var newarr = names.slice(1);
console.log(newarr);
console.log(names);

//short() alphabet onujai sajabe
var sortnames = names.sort();
console.log(sortnames);

//reverse() , eti short er ulta
var revnames = names.sort();
names.reverse();
console.log(revnames);

//short()methode number er jonno ovabe kaj kore na korte hole akta anonymous fun nite hoy
var number = [20,10,5,1,8];
number.sort(function(a,b){
	return a-b;               //ekane a-b jodi positivite hoy taholei swap korbe negative/zero hole swap korbe na
})
console.log(number);

//reverse shorting
var number1 = [20,10,5,1,8];
number1.sort(function(a,b){
	return b-a;               //ekane a-b jodi positivite hoy taholei swap korbe negative/zero hole swap korbe na
})
console.log(number1);