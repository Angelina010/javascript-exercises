const getTheTitles = function(books) {
    // let res = [];
    // books.forEach((info) => {
    //     res.push(info["title"]);
    // })
    // return res;
    return books.map((info) => info["title"]);
};

// Do not edit below this line
module.exports = getTheTitles;
