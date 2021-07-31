const fs = require('fs');

const genders = [
    'male',
    'female',
]

const maleNames = [
    'John',
    'Connor',
    'Bob',
    'Ken',
    'Felix',
    'Dave',
    'Tommy',
    'Sett',
    'Kane',
    'Mobius',
    'Oguwewe',
    'Sarius',
    'Monty',
    'Ick',
    'Sonny',
    'Kevin',
    'Adrian',
    'Adam',
    'Khabib',
    'Hasbulla',
]

const femaleNames = [
    'Tina',
    'Gigi',
    'Torey',
    'Kate',
    'Kiki',
    'Olivia',
    'Charlotte',
    'Ava',
    'Mia',
    'Isabelle',
    'Sophia',
    'Emma',
    'Scarlett',
    'Chloe',
    'Grace',
    'Zoey',
    'Violet',
    'Vayne',
    'Caitlyn',
    'Ivy',
]

const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Brown',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
    'Rodriguez',
    'Martinez',
    'Hernandez',
    'Lopez',
    'Gonzalez',
    'Wilson',
    'Anderson',
    'Thomas',
    'Taylor',
    'Moore',
    'Jackson',
    'Martin',
    'Lee',
]

const generateAge  = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) +min;
}

let people = []

const randChoice = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};


for(let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = randChoice(gender === 'male' ? maleNames : femaleNames)
    const lastName = randChoice(lastNames);
    const age = generateAge(18,78);
    const person = {
       firstName: firstName,
       lastName: lastName,
       gender: gender,
       age: age,
    }
    people.push(person);
}

fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
