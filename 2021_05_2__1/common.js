// 2.1
let numberArr = [];
for ( var i = 0; i < 20; i++ ) {
	numberArr.push(Math.floor( Math.random() * 1000 ));
}  
let searchNumb = +prompt('Проверим наличие числа в масиве');
for (i = 0; i < numberArr.length; i++) {
    // console.log(numberArr);
    let iter = numberArr[i];
    if (searchNumb != '' && searchNumb == iter){
   		console.log(iter + " - есть такое число"); 
    	break;
    }
    else{ 
    }  
}