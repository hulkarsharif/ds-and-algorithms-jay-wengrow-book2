// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

function dayTo(month, day) {
    let myBirthDay = 12;
    let myBirthMonth = 10;
    if (
        (month === myBirthMonth && day === myBirthDay) ||
        (month === myBirthDay && day === myBirthDay)
    ) {
        console.log("How do you know?");
    } else {
        console.log("Just another day...");
    }
}
dayTo(10, 12); //'How do you know?'

dayTo(12.12); // 'Just another day...'

//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(leapYear(2022));

function allInt(num) {
    let count = 0;
    for (let i = 512; i <= 4096; i++) {
        if (i % 5 === 0) {
            console.log(i);
            count++;
        }
    }
}
allInt();

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function dojoWay(num) {
    for (let i = 1; i <= 100; i++) {
        if (num % 10 === 0) {
            console.log("Coding");
        } else if (num % 5 === 0) {
            console.log("Dojo");
        } else {
            console.log(i);
        }
    }
    return num;
}
dojoWay(25);
