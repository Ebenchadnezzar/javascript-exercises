const fibonacci = function(num) {
    if (typeof(num) == 'string') { num = +num; }
    if (num < 0) { return 'OOPS'; }
    if (num == 0) { return 0; }
    if (num <= 2) { return 1; }
    
    let prev = 1;
    let cur = 2;

    for (let i = 4; i <= num; ++i) {
        let temp = cur;
        cur = cur + prev;
        prev = temp;
    }

    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
