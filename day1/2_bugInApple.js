// Week 3-1 bugInApple
//
//
// Find out "B"(Bug) in a lot of "A"(Apple).
//
//  There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.
//
//  input: [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]
//
//  output: [1,1]
//
//  Example :
// 2-dimesionalArray will be input.
//
// apple :
// [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]]
//
//
//
// Answer : [1,1]

var userInput = [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]];

var bugInApple = function(str) {

    /*
    return str;
    // Array(5) [Array(5), Array(5), Array(5), Array(5), Array(5)

    return str[0][0];
    // A가 출력된다.

    var index = str[1].indexOf("B");
    return index;
    // 1 이 출력된다.
    */

    // return 할 값을 받기 위한 변수
    var whereIs;

    for (var i=0; i<str.length; i++) {

        var str1 = str[i];

        for (var j=0; j<str1.length; j++) {

            if (str1[j] === "B") {

                whereIs = [i,j];

            }

        }

    }

    return whereIs;
};

console.log(bugInApple(userInput));

/*

    첫번째 코드 

    주어진 배열들 중에서 "B" 가 있다. 
    "B" 를 파악하고 어디에 위치해 있는지를 출력하라 

    userInput 이라는 배열 안에 
    5개의 값이 담긴 배열이 5개 존재하고
    해당 배열 안에 5개의 값이 들어가 있다. 

*/

/*
    var userInput = [["A","A","A","A","A"],["A","B","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"],["A","A","A","A","A"]];

    var bugInApple = function(str) {

        var bug = []

        for (var i=0; i<str.length; i++)
        {
            for (var j=0; j<str[i].length; j++)
            {
                if (str[i] === "B")
                {
                    bug.push(i);
                    bug.push(j);   

                }
            }
        }

        return bug;

    };

    console.log(bugInApple(userInput));
*/
