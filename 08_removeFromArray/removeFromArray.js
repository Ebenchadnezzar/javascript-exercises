const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        const argCheck = (element) => element === arg;

        let index = arr.findIndex(argCheck);
        while (index >= 0) {
            arr.splice(index, 1);
            index = arr.findIndex(argCheck);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;