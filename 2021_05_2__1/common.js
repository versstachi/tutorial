// 2.1
let numberArr = [];
for ( var i = 0; i < 10; i++ ) {
	numberArr.push(Math.floor( Math.random() * 10 ));
}  
let searchNumb = +prompt('Проверим наличие числа в масиве'); 
console.log(numberArr);
let undeVar = NaN;
if ( searchNumb != undeVar){
	for (i = 0; i < numberArr.length; i++) {
	    let iter = numberArr[i];
	    if ( searchNumb == iter){
	   		console.log(iter + " - есть такое число"); 
	    	break;
	    } 
	} 
}  