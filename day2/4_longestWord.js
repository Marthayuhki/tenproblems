// Week 2-3 longestWord
//
//  Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//  If there are two or more words that are the same length, return the first word from the string with that length.       Assume sen will not be empty.
//
// Example 1: longestWord("I love codestates"); // => "codestates"
// Example 2: longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"

var userInput = "Teamwork skills will take you anywhere";

var longestWord = function(sen) {

    /*
        문자열 중 글자 하나를 뽑아본다. 
        var chat = sen.charAt(1);
        return chat;
    */

    /*
        문자열을 흩어지게 했다가 뭉치게 한다.
        var seperate = []
        seperate = sen.split("");
        plus = seperate.join("");
        
        return seperate;
    */

    /*
        문자열 중에서 필요한 글자만큼 뽑아낸다.
        var subString1 = sen;
        var subString2 = subString1.substr(0,7);
        
        return subString2;

        Teamwor 이 출력된다. 
    */

    /*
        var result = sen.split(" ");
        return result;

        ["Teamwork", "skills", "will", "take", "you", "anywhere"] 출력된다. 
    */

    /*
        var seperate = sen.split(" ");
        var longLength = seperate[0].length;
        var count;

        for (var i=1; i<seperate.length; i++) {
            
            if (seperate[i].length > longLength) {

                    longLength = seperate[i].length;
                    count = seperate[i];
            }
        }

    return count; 

    // 값이 출력이 되지 않는다.
    // 처음 단어의 길이가 길다보니 if문 안으로 들어가 실행될 필요가 없기 때문이다. 

    */

    var seperate = sen.split(" ");
    var longLength = seperate[0].length;
    var count;

    for (var i=1; i<seperate.length; i++) {
        
       if (seperate[i].length > longLength) {

            longLength = seperate[i].length;
            count = seperate[i];
       }
       else if (longLength > seperate[i].length)
       {
            count = seperate[0];
       }

    }

    return count; 
}

console.log(longestWord(userInput));

/*
    Teamwork skills will take you anywhere 
    문장 자체를 띄어쓰기를 기준으로 쪼갠다. 

    Teamwork, skills, will, take, you, anywhere
    로 나눈 다음에 각 값들의 length를 구한다. 

    각 단어의 length 값을 서로 비교하면서 가장 큰 것을
    선정하고, 길이가 가장 큰 값을 return 한다. 

*/

