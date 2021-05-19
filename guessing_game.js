
var win=0;
var lost=0;
for(var i=1;i<=5;i++)
{
	var x = parseInt(prompt("Enter a number from 1 to 5 : "));


		var num = Math.floor(Math.random()*5)+1;
			if(x==num){
			console.log("You Win.");
			win++;
			}else{
			console.log("You Lost. Random number was "+num);
			lost++;
		}
}

document.write("You win = "+win+"times and lost = "+lost+"times");