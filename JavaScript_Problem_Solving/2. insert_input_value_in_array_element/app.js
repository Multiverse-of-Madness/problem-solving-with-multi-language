// get html input value;
let input = document.querySelector('.input-data');

// our array;
let data = ['a', 'b'];

// count 
let count = 0;

// click button and add value;
document.querySelector('.button-clicked').addEventListener('click', function () {

    // generate random number;
    const randNumber = Math.floor((Math.random() * 3) + 3);

    // get html input value;
    const inputValue = input.value;

    // this variable use for removed data store; 
    let allData;

    // count store number;
    count = count + randNumber;

    // data added index number
    let rand = count;

    // add input value;
    data.splice(rand, 0, inputValue);

    // search index value;
    let red = data.lastIndexOf(inputValue);

    // store removed element;
    allData = data.slice(0, red);

    // remove data array element;
    data.splice(0, red);

    // store array data;
    data = [...allData, ...data];

    // display data use console;
    console.log(data);

    // this is use for html input value remove;
    input.value = '';

});

