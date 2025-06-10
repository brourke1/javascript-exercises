const palindromes = function (sentence) {
    sentence = sentence.toLocaleLowerCase();
    sentence = sentence.replaceAll(" ", "");
    sentence = sentence.replaceAll(",", "");
    sentence = sentence.replaceAll(".", "");
    sentence = sentence.replaceAll("!", "");
    palindrome = sentence.split("").reverse().join("");

    console.log(`sentence: ${sentence} palindrome: ${palindrome}`);

    if(sentence.localeCompare(palindrome) == 0){
        return true;
    }
    else{
        return false;
    } 

};

// Do not edit below this line
module.exports = palindromes;
