const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    let a = 1;
    let b = 0;
    let c = a;
    for(let i = 0; i < num; i++){
        c = a + b;
        b = a;
        a = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
