// Week 8-2  findMissingNumber
//
// 성준이는 1부터 n까지 숫자를 적던 중 깜빡하고 하나의 숫자를 빼먹었다. 그 빼먹은 숫자를 찾으시오. Example input : "1 6 2 4 3"
// output : "5"

var userInput = '1 6 2 4 3';

function findMissingNumber(str) {

    var number = str.split(" ");

    number = number.sort();
    number = number.reverse();

    var index = 0;
    var missNum;

    for (var i=1; i<number.length; i++) {

        if (number[index] - number[i] === 2) {

            missNum = number[index] - 1;

        }
        else if (number[index] - number[i] !== 2) {

            index = i; // index++ 로하면 결과값이 3이 나오네 
        }
    }

    return missNum;
}

console.log(findMissingNumber(userInput));

    /*
    var number = [];

    for (var i=0; i<(str.length/2); i++) {

        number[i] = str[(i * 2)];

    }

    return number;

    // Array(5) ["1", "6", "2", "4", "3"] 출력된다.
    */

    /*
   var number = [];
   var missNum;

   for (var i=0; i<(str.length/2); i++) {

       number[i] = str[(i * 2)];

   }

   number = number.sort();
   number = number.reverse();

   for (var i=1; i<number.length; i++) {

        var index = 0;

        if ((number[index] - number[i]) % 2 === 0) {

            missNum = number[index] - 1;
        }
        else if ((number[index] - number[i]) % 2 === 0) {

            index = i;
        }
   }

   return missNum;
   */