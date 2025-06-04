const repeatString = function(str, numTimes) {
    let output = ""
    if(numTimes < 0) return "ERROR";
    for(let i = 0; i < numTimes; i++){
        output += str;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
