const getTheTitles = function(books) {
    return books.reduce((titles, cur) => {
        titles.push(cur.title);
        return titles;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
