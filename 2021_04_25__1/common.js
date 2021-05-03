
true && ( 2<1 || !true ) || !( 3 === 4 || true || false && true) && 2===2

1. 
true && ( 2<1 || false ) || !( 3 === 4 || true || false && true) && 2===2

2. 
true && ( false || false ) || !( 3 === 4 || true || false && true) && 2===2

3. 
true && ( false || false ) || !( 3 === 4 || true || false && true) && 2===2

4. 
true && false || !( 3 === 4 || true || false && true) && 2===2

5. 
true && false || !( 3 === 4 || true || false && true) && 2===2

6. 
false || !( 3 === 4 || true || false && true) && 2===2

7. 
false || !( false || true || false && true) && 2===2

8. 
false || !( false || true || false) && 2===2

9. 
false || !( true || false) && 2===2

10. 
false || !( true ) && 2===2

11. 
false || false && true

12. 
false || false

13. 
false



 
let quest1 = 0, quest2 = 0, quest3 = 0; 
quest1 = prompt('Ты любишь загорать');
quest2 = prompt('Ты любишь улыбаться?');
if(quest1 == 'да' && quest2 == 'да'){
prompt('Тебя зовут Барак?');
alert('Ты Барак');
}
else{
alert('Нет, ты не Барак');
}