let numberArr = [];
for ( var i = 0; i < 20; i++ ) {
	numberArr.push(Math.floor( Math.random() * 1000 ));
}   
    console.log(numberArr);
       let iter = numberArr;  
    let iters = 0; 
for (i = 0; i < numberArr.length; i++) { 
   	iter = numberArr[i];
     iters = iters + iter; 
    } 
console.log(iters); 
console.log(iters/numberArr.length); 