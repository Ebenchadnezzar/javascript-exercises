const sumAll = function(a, b) { 
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let max = (a > b) ? a : b;
    let min = (a < b) ? a : b;
    let sum = 0;

    for (let i = min; i <= max; ++i) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
