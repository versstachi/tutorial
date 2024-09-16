let numberArr = [];
for ( var i = 0; i < 10; i++ ) {
	numberArr.push(Math.floor( Math.random() * 10 ));
}   
let searchMin =  numberArr[0];
let searchMax =  numberArr[0];
console.log(numberArr);  
for (i = 0; i < numberArr.length; i++) {
	if(searchMin > numberArr[i]){
		searchMin = searchMin = numberArr[i];
	}
	else if(searchMax < numberArr[i]){
		searchMax = searchMax = numberArr[i]; 
	}
} 
let searchResult = searchMax - searchMin;
console.log(searchMin);
console.log(searchMax);
console.log(searchResult);