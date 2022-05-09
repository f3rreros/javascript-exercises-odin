const repeatString = function(string,num) {
    let str = string.toString();
    if (num === 0) {
        return ""
    } else if (num < 0) {
        return "ERROR"
    }else {
    for (let i = 0; i < (num - 1); i++){
        str = string.concat(str)
     }
     return str}
    

};


// Do not edit below this line
module.exports = repeatString;
