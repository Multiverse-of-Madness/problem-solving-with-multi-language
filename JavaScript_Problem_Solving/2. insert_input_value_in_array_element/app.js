// get html input value;
let input = document.querySelector('.input-data');

// our array;
let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

let i = 0;

// click button and add value;
document.querySelector('.button-clicked').addEventListener('click', function () {

    // get html input value;
    const inputValue = input.value;
    // let allData;

    
    i = i + 4;
    
    // console.log(i);
    
    if (3 <= data.length) {
        
        // data added index number
        let rand = i

        // add input value;
        data.splice(rand, 0, inputValue);

        // search index value;
        let red = data.lastIndexOf(inputValue);

        // store removed element;
        allData = data.slice(0, red);

        // remove data array element;
        data.splice(0, red);
    }

    // store array data;
    data = [...allData, ...data];

    console.log(data);

    // this is use for html input value remove;
    input.value = '';

});

