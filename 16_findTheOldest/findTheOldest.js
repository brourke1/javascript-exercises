function compareAges(personOne, personTwo){
    let ageOne;
    let ageTwo;
    if(personOne.yearOfDeath == undefined){
        ageOne = 2025 - personOne.birthYear;
    }
    else{
        ageOne = personOne.yearOfDeath - personOne.yearOfBirth
    }
    if(personTwo.yearOfDeath == undefined){
        ageTwo = 2025 - personTwo.yearOfBirth;
    }
    else{
        ageTwo = personTwo.yearOfDeath - personTwo.yearOfBirth;
    }
    

    return ageOne < ageTwo ? 1 : -1;

}

const findTheOldest = function(people) {
    let sortedPeople = people.sort(compareAges);
    console.log(sortedPeople);
    return sortedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
