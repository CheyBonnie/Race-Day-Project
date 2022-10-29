// Race Day

let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = true
const age = 21

if (age >=18 && earlyRegistration === true) {
    raceNumber += 1000;
}
if (age >= 18 && earlyRegistration === true) {
    console.log(`You will be racing at 9:30am, your race number will be ${raceNumber}. Good Luck`);
} else if (age >= 18 && earlyRegistration === false) {
    console.log(`You will be racing at 11:00am, your race number is ${raceNumber}. Good luck`);
} else if (age < 18) {
    console.log(`You will be racing at 12:30pm, your race number is ${raceNumber}`);
}
