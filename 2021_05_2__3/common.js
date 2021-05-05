let numberArr = [];
for ( var i = 0; i < 10; i++ ) {
  numberArr.push(Math.floor( Math.random() * 1000 ));
}   
console.log(numberArr);
let searchArr = numberArr; 
let odd = 0;
let even = 0;
for (i = 0; i < numberArr.length; i++) { 
  searchArr = numberArr[i]%2;
  if(searchArr>0){ 
    odd++;
  }  
  else if(searchArr == 0){
    even++;
  }  
}
console.log("Нечетные " + odd);
console.log("Четные " + even);
