const findTheOldest = function(people) {
    let oldest = null;
    let oldestAge = 0;   

    for (let person of people) {
        if (!("yearOfDeath" in person)) { person.yearOfDeath = 2025; }
        let age = person.yearOfDeath - person.yearOfBirth;

        if (age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    }

    return {
        name: oldest.name,
        yearOfBirth: oldest.yearOfBirth,
        yearOfDeath: oldest.yearOfDeath,
    };
};

// Do not edit below this line
module.exports = findTheOldest;
