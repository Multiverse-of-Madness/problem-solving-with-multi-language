// Find the max or min salary of a list of people objects:---
const workers = [
    {
        name: 'Dom',
        occupation: 'Software Developer',
        salary: 90000
    },
    {
        name: 'Max',
        occupation: 'Mechanic',
        salary: 150000
    },
    {
        name: 'Max',
        occupation: 'Mechanic',
        salary: 220000
    },
    {
        name: 'Beth',
        occupation: 'Teacher',
        salary: 75000
    },

];


let salary = 0;
let storeObj = '';

for (let i = 0; i < workers.length; i++) {

    if (workers[i].salary >= salary) {

        storeObj = workers[i];

    }

    salary = workers[i].salary;

}

console.log(storeObj);

/* // output: 
    { 
        name: 'Max', 
        occupation: 'Mechanic', 
        salary: 220000 
    }
*/

