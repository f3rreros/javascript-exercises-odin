const sumAll = function(a, b) {
    let i = a;
    let sum = 0;
    if (a < 0 || b < 0){
        return "ERROR"
    } else if (typeof a !== "number" || typeof b !== "number"){
        return "ERROR"
    } else if (a > b) {
        for (i ; i > (b-1) ; i-- ){
            sum += i;
        } return sum;
    }
    else if (a < b){
        for (i;i < (b+1);i++){
            sum += i;
    }
    return sum;}

};

// Do not edit below this line
module.exports = sumAll;
