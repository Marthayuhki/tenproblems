// Week 6-3 threeFiveMultiples
//
// Using the JavaScript language, have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num.
//
//  For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.

var userInput = 10;

var threeFiveMultiples = function(str) {

    // parameter로부터 받은 값에서 1을 뺀다.
    // 주어진 값에서 3의 배수와 5의 배수가 되는 수가 몇 개되는지 파악한다. 
    var threeMulti = (str-1)/3;
    var fiveMulti = (str-1)/5;

    // threeMulti, fiveMulti의 값이 소수점으로 떨어질 수 있다. 
    // 낮은 값의 정수로 변환되도록 만든다. 
    threeMulti = Math.floor(threeMulti);
    fiveMulti = Math.floor(fiveMulti);

    var num3 = [] // 3의 배수가 되는 값을 넣을 공간
    var num5 = [] // 5의 배수가 되는 값을 넣을 공간
    var num3Sum = 0; // 3의 배수가 되는 값들의 합을 넣을 공간
    var num5Sum = 0; // 5의 배수가 되는 값들의 합을 넣을 공간 

    // parameter 값 범위 내에서 3의 배수가 되는 값들을 생성한다.
    // 생성된 3의 배수가 되는 값을 num3[] 에 넣는다. 
    for (var i=0; i<threeMulti; i++) {

        num3[i] = 3 * (i+1);

        /*

        값이 중복해서 더해진다. 

        for (var j=0; j<num3.length; j++) {

            num3Sum = num3Sum + num3[i];
        }
        */

    }

    // 범위 내에 있는 3의 배수의 값들을 더하고 num3Sum에 넣는다. 
    for (var i=0; i<num3.length; i++) {

        num3Sum = num3Sum + num3[i];
    }

    // parameter 값 범위 내에서 5의 배수가 되는 값들을 생성한다.
    // 생성된 5의 배수가 되는 값을 num5[] 에 넣는다. 
    for (var j=0; j<fiveMulti; j++) {

        num5[j] = 5 * (j+1);
    }

    // 범위 내에 있는 5의 배수의 값들을 더하고 num5Sum에 넣는다.
    // 공배수 15일 경우에는 더하기를 제외한다. 
    for (var j=0; j<num5.length; j++) {

        if (num5[j] % 3 !== 0) {

            num5Sum = num5Sum + num5[j];
        }
    }

    // 범위 내에 있는 3의 배수의 합과 5의 배수의 합을 합쳐서 return 한다. 
    return num3Sum + num5Sum;

};

console.log(threeFiveMultiples(userInput));
