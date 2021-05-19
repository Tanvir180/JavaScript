//Add a Constructor
//constructor er sahajje templette toiri kore neoa jay

// function Student(name, age, cgpa, lang){   //constructor er namer er first letter capital use korte hobe

// 	this.name = name;
// 	this.age = age;
// 	this.cgpa = cgpa;
// 	this.lang =lang

// }

// var student1 = new Student("Tanvir",27,3.92,["Bangla","English"]);
// var student2 = new Student("AHAMMED",27,3.92,["Bangla","English"]);
// var student3 = new Student("Hridoy",27,3.92,["Bangla","English"]);


// console.log(student1.name);
// console.log(student2.name);




// add a function into constructor


function Student(name, age, cgpa, lang){   //constructor er namer er first letter capital use korte hobe

	this.name = name;
	this.age = age;
	this.cgpa = cgpa;
	this.lang =lang


	this.display = function(){
		console.log(this.name)
		console.log(this.age)
		console.log(this.cgpa)
		console.log(this.lang)
	}

}
var student1 = new Student("Tanvir",27,3.92,["Bangla","English"]);
var student2 = new Student("AHAMMED",27,3.92,["Bangla","English"]);
var student3 = new Student("Hridoy",27,3.92,["Bangla","English"]);

student1.display();
student2.display();