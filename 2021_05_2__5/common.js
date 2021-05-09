let numberArr = [];
for ( var i = 0; i < 10; i++ ) {
	numberArr.push(Math.floor( Math.random() * 10 ));
}
console.log(numberArr);
let numbCheck;   
let numbCheckVall;  
for (i = 0; i < numberArr.length; i++) { 
	numbCheckVall = 0; 
	numbCheck = numberArr[i];      
	console.log("Проверяем число в масиве: " + numbCheck);  
	for (x = 0; x < numberArr.length; x++) {  
		if(numbCheck == numberArr[x]) {
			numbCheckVall += 1; 
		}
	} 
	console.log("Повторяется раз: " + numbCheckVall);
	console.log("");
}