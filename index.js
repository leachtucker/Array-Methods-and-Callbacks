import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

// Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

// (a) Home Team name for 2014 world cup final
console.log(fifaData[828]["Home Team Name"]);
// (b) Away Team name for 2014 world cup final
console.log(fifaData[828]["Away Team Name"]);
// (c) Home Team goals for 2014 world cup final
console.log(fifaData[828]["Home Team Goals"]);
// (d) Away Team goals for 2014 world cup final
console.log(fifaData[828]["Away Team Goals"]);
// (e) Winner of 2014 world cup final
console.log(fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
    let newArray = [];
    data.forEach(element => {
        if (element["Stage"].includes(`Final`)) {
            newArray.push(element);
        }
    });
    return newArray;
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears(getFinals) {
    let years = getFinals.map(function(item) {
        return item["Year"];
    });

    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {
    let winners = [];
    getFinals.forEach(function(element) {
        let winner = '';
        let homeScore = (element['Home Team Goals']) + (element['Half-time Home Goals']);
        let awayScore = (element['Away Team Goals']) + (element['Half-time Away Goals']);
        if (homeScore > awayScore) {
            winner = element['Home Team Name'];
        } else if (homeScore < awayScore) {
            winner = element['Away Team Name'];
        } else {
            // This is part of the stretch goal listed in the readMe
            winner = element['Win conditions'].split(' win ')[0];
        }
        winners.push(winner);
    });
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
function getWinnersByYear(getWinners, getYears) {
    let string = ``;
    getWinners.forEach(function(item, index) {
        string += `In ${getYears[index]}, ${item} won the world cup!\n`;
    });
    return string;
};

console.log(getWinnersByYear(
    (getWinners(getFinals(fifaData))), (getYears(getFinals(fifaData)))
));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeScores = data.map(function(item) {
        return item['Home Team Goals'] + item['Half-time Home Goals'];
    });
    let homeTotal = homeScores.reduce(((acc, item) => acc + item), 0);
    let homeAvg = homeTotal / data.length;

    let awayScores = data.map(function(item) {
        return item['Away Team Goals'] + item['Half-time Away Goals'];
    });
    let awayTotal = awayScores.reduce(((acc, item) => acc + item), 0);
    let awayAvg = awayTotal / data.length;

    return `Average number of home team goals: ${homeAvg}\nAverage number of away team goals: ${awayAvg}`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    let teamGames = []; // Games that the team played on (either: home or away side)
    data.forEach(function(item) {
        if (item['Home Team Initials'] === teamInitials || item['Away Team Initials'] === teamInitials) {
            teamGames.push(item);
        }
    });

    let gamesWon = 0;


    return teamGames;
};

console.log(getCountryWins(fifaData, "ARG"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals( /* code here */ ) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense( /* code here */ ) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

// Splicing the win conditions on task 4 was a stretch task according to the readMe doc.