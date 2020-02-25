// Week 1-3 firstReverse
//
//  Using the JavaScript language, have the function FirstReverse(str)take the str parameter being passed and return the string in reversed order.
//
// example 1: firstReverse("codestates"); => "setatsedoc"
// example 2: firstReverse("I love codestates"); "setatsedoc evol I"


var userInput = "afhiprep";

function firstReverse(str) {

    /*
        문자열을 하나씩 쪼갠다. 
        var seperate = str.split("");
        return seperate;
        Array(8) ["a", "f", "h", "i", "p", "r", "e", "p"] 출력된다.

        var seperate = str.split();
        쪼개지지 않는다.
    */

    /*
        배열이 가진 값을 역순으로 재배열 한다. 
        var seperate = str.split("");
        var reverseInput = seperate.reverse(); 
        return reverseInput;
        Array(8) ["p", "e", "r", "p", "i", "h", "f", "a"] 출력된다.
    */

    /*
        요거는 왜 안될까????
        var seperate = str.split("");
        var reverseInput = seperate.reverse(); 
        reversInput = reverseInput.join("");
        // 하나의 문자열로 합친다음 값을 return 한다. 
        
        return reverseInput;
    */

    var seperate = str.split("");
    var reverseInput = seperate.reverse(); 
    return reverseInput.join("");

}

console.log(firstReverse(userInput));

/*
    function firstReverse(str) {

        // 분해한 문자열을 배열에 넣는다.
        var str1 = [] 
        str1 = str.split("");
        
        // 최종 값을 반환할 변수를 생성한다.
        var str2 = []

        // str1에 있는 문자열을 str2에 역순으로 값을 넣는다.
        for (var i=str1.length-1; i===0; i--) {

            str2 = str[i].pop();

        }

        // 문자열들을 합친다.
        str2.join();

        // 합친 문자열을 return 한다. 
        return str2.pop();
    }
*/

/*
    문자열을 받는다.
    받은 문자열을 거꾸로 정렬한다.
    거꾸로 정렬한 문자열을 return 한다. 

    ["a", "b", "c"] 로 되어 있는 것을 하나로 합치는 join이 있다면
    ["abc"] 를 따로따로 놓을 수 있는 함수가 있을 것 같다. 

    자바스크립트 문자열

    [ charAt(index) ] 
    0에서 시작하는 인덱스 값을 받아 그 인덱스 값에
    해당하는 문자를 반환한다. 

    var str = "apple";
    str.charAt(1); // p를 반환

    [ substring(startindex, endindex) ]
    지정한 시작 인덱스부터 마지막 인덱스까지의 문자열을 반환한다. 

    [ 문자열 비교 ]
    var str1 = "ab";
    var str2 = "b";

    console.log(str1 < str2); // true를 반환

    console.log(str2 > str1); // false를 반환

    [ 문자열 검색 ]
    indexOf(searchValue[, fromIndex)
    문자열 내에서 특정 문자의 인덱스 값을 받기 위해 
    indexOf(searchValue[, fromIndex) 를 사용한다. 
    searchValue는 검색할 문자, fromIndex는 검색시작점을 가리킨다. 

    var str1 = "apple-peach";
    str.indexOf("apple"); // 0을 반환
    str.indexOf("pea"); // 6을 반환 

    [ 문자열 분해 ]
    split(seperator)
    문자열 분해시 사용되는 함수는 split(seperator) 를 사용한다. 
    여기서 seperator는 구분자를 의미한다. 
    이 함수의 경우 문자열을 구분자를 기준으로 분해하여 문자열 배열을 
    생성하여 반환한다.

    var str1 = "apples"
    str1.split(""); // "a", "p", "p", "l", "e", "s"
    var str2 = "apple,bananas,peaches"
    str2.split(",") // "apple", "banana", "peach"
    
    [ 문자열 바꾸기 ]
    replace (string, replaceString)

    var str1 = "hello world";
    str1.replace("hello", "hi"); // "hi world"를 반환한다. 


*/
