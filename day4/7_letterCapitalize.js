// Week 6-1 letterCapitalize
//
// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
//
// Words will be separated by only one space.
//
// example 1: letterCapitalize("hello world"); => "Hello World"
// example 2: letterCapitalize("javascript is sexy") => "Javascript Is Sexy"

var userInput = "hello world";

var letterCapitalize = function(str) {

    /*
    var input = str.split(" ");
    // ["hello", "world"]

    var input1 = input[0].split("");
    input1[0] = input1[0].toUpperCase();
    input1 = input1.join("");

    return input1;

    // Hello 출력
    */

    var input = str.split(" ");

    for (var i=0; i<input.length; i++) {

        input[i] = input[i].split("");

        input[i][0] = input[i][0].toUpperCase();

        input[i] = input[i].join("");
    }

    return input.join(" ");
};

console.log(letterCapitalize(userInput));
