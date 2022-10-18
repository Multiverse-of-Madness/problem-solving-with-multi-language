const array = ['green', 'red', 'blue', 'red', 'yellow', 'yellow', 'green', 'red', 'blue', 'green', 'yellow', 'red'];


// 1st type:-
let a = '';
let obj = {};

const arrayLength = array.length;

for (let i = 0; i < arrayLength; i++) {

    a = array[i];

    if (obj[a] > 0) {
        obj[a] += 1;
    }
    else {
        obj[a] = 1;
    }

}
console.log(obj); // output:-{ green: 3, red: 4, blue: 2, yellow: 3 }


// 2nd type:-
const result = array.reduce((prev, color) => {

    prev[color] = (prev[color] || 0) + 1;

    return prev;

}, {});

console.log(result); // output:-{ green: 3, red: 4, blue: 2, yellow: 3 }



