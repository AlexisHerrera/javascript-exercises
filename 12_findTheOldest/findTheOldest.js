function years_lived(person) {
    let startYear = person.yearOfDeath;
    if (!startYear) {
       startYear = new Date().getFullYear();
    }
    return startYear - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce(function (partial_oldest_person, current_person) {
        return years_lived(partial_oldest_person) >= years_lived(current_person) ? partial_oldest_person : current_person;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
