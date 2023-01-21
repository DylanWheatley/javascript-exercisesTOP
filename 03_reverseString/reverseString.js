const reverseString = function(word) {
    let splitWord = word.split("");

    let reverseWord = splitWord.reverse();

    let joinedWord = reverseWord.join("");

    return joinedWord;
};

// Do not edit below this line
module.exports = reverseString;
