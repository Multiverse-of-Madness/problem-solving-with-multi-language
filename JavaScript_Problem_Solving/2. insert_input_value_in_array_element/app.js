// our array;
const data = ['a', 'b', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// get html input value;
let input = document.querySelector('.input-data');

// count 
let count = 0;

// click button and add value;
document.querySelector('.button-clicked').addEventListener('click', function () {
    // get html input value;
    const inputValue = input.value;

    // generate random number;
    const randNumber = Math.floor((Math.random() * 3) + 3);

    // count store number;
    count = count + randNumber;

    // data added index number
    let rand = count;

    // add input value;
    data.splice(rand, 0, inputValue);

    // display data use console;
    console.log(data);

    // this is use for html input value remove;
    input.value = '';

});

