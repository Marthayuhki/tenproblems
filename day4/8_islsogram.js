// Week 5-3 islsogram
//
//
//  An isogram is a word that has no repeating letters, consecutive or non-consecutive.
//  Implement a function that determines whether a string that contains only letters is an isogram.
//
//  Assume the empty string is an isogram. Ignore letter case.
// Example 1: isIsogram("Dermatoglyphics"); => true
// Example 2: isIsogram("aba"); => false
// Example 3: isIsogram("moOse"); => false // -- ignore letter case


var userInput = "moOse";

var isIsosgram = function(str) {

    var smallWord = str.toLowerCase();
    var equal = smallWord.charAt(0);

    for (var i=1; i<smallWord.length; i++) {

        if (equal === smallWord[i]) {
            
            return false; 
        }
        else if (equal !== smallWord[i]) {

            equal = smallWord.charAt(i);
        }
    }

    return true;
};

console.log(isIsosgram(userInput));
