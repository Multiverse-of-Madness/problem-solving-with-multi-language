// main array;
const data = [' Noman', ' b', ' b', ' c', ' d', ' e', ' f', ' g', ' h', ' i', ' j'];
// show main array data
let mainArray = document.querySelector('.add-main-array').innerHTML = `${data}`;


// get html input;
let input = document.querySelector('.input-data');

// hide old and present array element;
let oldAndPresentDiv = document.querySelector('.recent-array').style.display = 'none';

// show old array data ;
let oldArrayDiv = document.querySelector('.add-old-array');
// show present array element;
let presentArrayDiv = document.querySelector('.add-present-array');


// count 
let count = 0;

// click button and add value;
document.querySelector('.button-clicked').addEventListener('click', function () {

    if (input.value === '') {
        // add error-show class
        setTimeout(() => {
            document.querySelector('.error').classList.add('error-show');
        }, 0);
        // remove error-show class in 2 second
        setTimeout(() => {
            document.querySelector('.error').classList.remove('error-show');
        }, 2000)
    }

    else {

        // show old and present array element;
        oldAndPresentDiv = document.querySelector('.recent-array').style.display = 'block';

        // store old array element;
        oldArrayDiv.innerHTML = data;

        // get html input value;
        const inputValue = input.value;

        // generate random number;
        const randNumber = Math.floor((Math.random() * 3) + 3);

        // count store number;
        count = count + randNumber;

        // data added index number
        let rand = count;

        // add input value;
        data.splice(rand, 0, (' ' + inputValue));

        // display data use console;
        presentArrayDiv.innerHTML = data;

        // remove error massage;
        document.querySelector('.error').classList.remove('error-show');

    }

    // this is use for html input value remove;
    input.value = '';
});

