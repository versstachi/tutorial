let numberArr = [];
for ( var i = 0; i < 10; i++ ) {
	numberArr.push(Math.floor( Math.random() * 1000 ));
}   
    console.log(numberArr);
       let iter = numberArr; 
       let one = 0;
       let zero = 0;
for (i = 0; i < numberArr.length; i++) { 
   iter = numberArr[i]%2;
   if(iter>0){ 
	one++;
    }  
  else if(iter == 0){
	zero++;
    }  
    else{

    }
    }
    console.log("Нечетные " + one);
    console.log("Четные " + zero);