// arrNumb = [1,3,3,4,5,3,3,5,6,3,8,9]; 
 // arrNumb = [1,2,3,4,5,3,7,3,7,3,5,3,4,3,6,3,5,3,5,3,4,5,6,3]; 
let arrNumb = [];
for ( var i = 0; i < 100; i++ ) {
	arrNumb.push(Math.floor( Math.random() * 5 ));
}   
console.log(arrNumb);
let selectNumb = [];
let maxStart=0, maxEnd=0;
let currStart=0; 
for( let i=0; i<arrNumb.length; ++i ){ 
 for( let j=i; j<arrNumb.length; j+=4 ){  
   if(arrNumb[i] === 3 && arrNumb[i+4] === 3){
    selectNumb.push(j); 
   }
 }
}
for (let i=0; i<selectNumb.length; ++i){
 currEnd=i;  
 if(selectNumb[currEnd] <= selectNumb[currEnd-1]){
   currStart=currEnd;
  }
  if((currEnd-currStart) >= (maxEnd-maxStart)){
   maxEnd=currEnd;
   maxStart=currStart;
  }
}
console.log("Связиа троек: " + selectNumb);
const biggestHill = [];
for (let i=0; i<(maxEnd - maxStart + 1); ++i)
biggestHill[i] = selectNumb[maxStart+i];

console.log("biggestHill - " + biggestHill);
console.log("biggestHill - Start " + biggestHill[0] + ", repeat - " + biggestHill.length);
