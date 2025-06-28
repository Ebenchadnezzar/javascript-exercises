const palindromes = function (str) {
    // Lowercase it and remove it's puncuation and spaces
    // Convert it to an array
    // check if it is equal to it.reverse()

    str = str.toLowerCase();
    str = str.replaceAll(',', '');
    str = str.replaceAll('!', '');
    str = str.replaceAll('\'', '');
    str = str.replaceAll('.', '');
    str = str.replaceAll(' ', '');
    
    let original = str.split('');
    let reversed = original.toReversed();

    let length = (original.length > reversed.length) ? original.length : reversed.length;
    for (let i = 0; i < length; ++i) {
        if (original[i] !== reversed[i]) { return false; }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
