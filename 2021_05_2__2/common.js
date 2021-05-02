let numberArr = [];
for ( var i = 0; i < 20; i++ ) {
	numberArr.push(Math.floor( Math.random() * 1000 ));
}   
    console.log(numberArr); 
let searchMin =  Math.min.apply(null, numberArr);
let searchMax =  Math.max.apply(null, numberArr);
let searchResult = searchMax - searchMin;
    console.log(searchMin);
    console.log(searchMax);
    console.log(searchResult);