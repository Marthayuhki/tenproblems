// Week 1-2 monkeyCount
//
// You take your son to the forest to see the monkeys.
// You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him.
// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//
// For example, if n = 10:
//
// return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


var userInputs = 10;

function monkeyCount(n) {

    var input = n;
    // 파라미터 n의 값을 input 변수에 넣는다. 
    var array = [];

    for (var i=1; i<=input; i++) {
        
     
        array.push(i); 
 
    }
    // for문을 돌려 10개 배열에 하나씩 값을 넣는다.
 
    return array;

}
console.log(monkeyCount(userInput));

    /*

    1번째 코딩

    for (n = 1; n < 11; n++) 
    {
        var array = [];
        array[n] = n;
    }   

    return array;
    
    '파라미터 n' 에 '10' 자체가 들어오는 것인데 
    1부터 들어와서 하나씩 더해 배열에 값을 넣고 출력하는 것만 
    생각했다. 
    
    */

    
    /*
    //두번째 코딩

    var input = n;
    // 파라미터 n의 값을 input 변수에 넣는다. 

    for (var i=0; i<input; i++) {
        
        var count = i;
        var array = [];
        
        array[i] = count + 1;

    }
    // for문을 돌려 10개 배열에 하나씩 값을 넣는다.

    return array;

    */

   /* 

   세번째 코딩

   var input = n;
   // 파라미터 n의 값을 input 변수에 넣는다. 

   for (var i=0; i<11; i++) {
        
        var input = i;
        input = i + 1;
        var array = [];
        array.push(i); 

   }
   // for문을 돌려 10개 배열에 하나씩 값을 넣는다.

   return array;
   */
   
   /*
    일단 수도코드를 작성해보고 요구사항을 명확히 이해한 다음에
    코드를 작성해보자. 처음 짤 때 뜰었던 생각은 배열과 for문의 결합
    으로 보았고 for문을 돌려서 배열에 값을 넣고 나중에 전부 출력하면
    되겠구나 생각했다. 하지만 세번째 코드를 작성하고 나서의 결과물은
    
    Array(10) [10, ...., 1] 로서
    처음과 끝부분에만 값이 들어가고 가운데 8개에는 값이 들어가지 않는다. 

    1. 파라미터 값을 10을 받는다. 
    2. 주어진 값 10까지 하나씩 세어간다. (for문)
    3. 하나씩 센 값을 배열에 넣는다. 
    4. 배열에 넣어진 값 모두를 출력시킨다. 

   */