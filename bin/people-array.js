'use strict';

const loadPeople = require('../lib/people.js');

loadPeople().then((people) => {
  let countOlderThanHenry = people.reduce((count, person) =>
    person.age() > 54 ? count + 1 : count,
    0);
  let countFirstLast = people.reduce((count, person) =>
    person.surname[0] === person.given_name[0] ? count + 1 : count,
    0);
  let averageAge = people.reduce((ages, person) =>
    ages + person.age(),
    0) / people.length;
  console.log(`People older than Henry: ${countOlderThanHenry}`);
  console.log(`People First/Last: ${countFirstLast}`);
  console.log(`Average age: ${averageAge}`);
}).catch((error) => console.log(error));
