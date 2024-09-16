let numberArr = [2,2,2,2,2,3,3,3,3,3,1,1,1,1,1,];
console.log(numberArr);  
let sumItems = [];  
for(let i=0; i<numberArr.length; i+=5){ 
	let sumElem = 0;
	for(let j=0; j<numberArr.length && j<5; ++j){  
		sumElem += numberArr[j+i]; 
	}
	sumItems.push(sumElem);   
	console.log(sumElem);
}
console.log(sumItems); 