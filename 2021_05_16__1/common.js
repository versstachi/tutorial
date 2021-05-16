let numberArr = [1,2,3,4,4,3,2,1];
console.log(numberArr); 
let recerse = [1,2,3,4,4,3,2,1]; 
console.log(recerse);  

let validefalse = false;
for(i=0;i<numberArr.length;++i){ 
	validefalse = numberArr[i]; 
}
if(recerse[(numberArr.length-1)-i] === numberArr[i] && recerse.length==numberArr.length && validefalse){   
	console.log("Массив симетричен");
} 
else{
	console.log("Массив не симетричен"); 
}