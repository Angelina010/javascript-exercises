const findTheOldest = function(arr) {
    let oldestAge = 0;
    let res;
    arr.forEach(person => {
        let deathYear = "yearOfDeath" in person ? person["yearOfDeath"] : new Date().getFullYear();
        let age = deathYear - person["yearOfBirth"]
        if (age > oldestAge){
            oldestAge = age;
            res = person;
        }
    });
    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
