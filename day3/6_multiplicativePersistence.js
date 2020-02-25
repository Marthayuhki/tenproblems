// Week 5-1 multiplicativePersistence
//
//  Have the function MultiplicativePersistence(num) take the num parameter 
//  being passed which will always be a positive integer and return its multiplicative persistence 
//  which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example: if num is 39 then your program should return 3 because 3 * 9 = 27 
// then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

var userInput = '784';

var MultiplicativePersistence = function(num) {

    var number = num.split("");
    var count = 0;

    while (number.length !== 1 || number[0] > 9) {

        var index = 0;

        for (var i=1; i<number.length; i++) {

            number[index] = number[index] * number[i];
            console.log(number);
        }

        number = number[0].toString().split("");
        // 넣어지는 값의 datetype이 문자열인가 숫자인가?
        // 정확히 인지하지 못했다. 

        count++;
        console.log(count);
    }
};

console.log(MultiplicativePersistence(userInput));

    /*
        var multi = num.split("");
        return multi;

        //Array(3) ["7", "8", "4"]
    */

    /*
        var multi = num.split("");
        var multi1;

        for (var i=1; i<multi.length; i++) {

            var index = 0;
            multi[i] = multi[index] * multi[i];
            index = i;
        }

        // 실행이 되지 않는다. 
    */

    /*
        var multi = num.split("");

        for (var i=1; i<multi.length; i++) {

            var index = 0;
            
            multi[index] = multi[index] * multi[i];
        }

        return multi[0]; // 224 출력
    */

    /*
    var multi = num.split("");
    var multi1;

    //while (multi.length !== 1) {

        for (var i=1; i<multi.length; i++) {

            var index = 0;

            multi[index] = multi[index] * multi[i];
        }

        multi1 = multi[0];
        //multi1 = multi1.split("");

    //}

    return multi1;
    */