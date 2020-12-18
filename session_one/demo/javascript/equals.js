
let one = 1;
let two = 2;

console.log(':: with assignments ---');

if (one = 1) console.log(`one = 1`);
if (one = 2) console.log(`two = 2`);

console.log(':: with integers ---');
one = 1;
two = 2;

(one == 1) ? console.log('one == 1') : console.log(`one(${one}) !== 1`);
(two == 1) ? console.log('two == 1') : console.log(`two(${two}) !== 1`);

(one === 1) ? console.log('one === 1') : console.log(`one(${one}) !== 1`);
(two === 1) ? console.log('two === 1') : console.log(`two(${two}) !== 1`);


console.log(':: with strings ---');
one = '1';
two = '2';

(one == 1) ? console.log(`one("${one}") == 1`) : console.log(`one("${one}") !== 1`);
(two == 1) ? console.log(`two("${two}")`) : console.log(`two("${two}") !== 1`);

(one === 1) ? console.log(`one("${one}") === 1`) : console.log(`one("${one}") !== 1`);
(two === 1) ? console.log(`two("${two}") === 1`) : console.log(`two("${two}") !== 1`);