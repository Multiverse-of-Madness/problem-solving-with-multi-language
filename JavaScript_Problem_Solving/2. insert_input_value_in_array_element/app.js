let input = document.querySelector('.input-data');

let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
// console.log(data.length);




document.querySelector('.button-clicked').addEventListener('click', function () {




    if (3 <= data.length) {
        // input value;
        const inputValue = input.value;
        // generate random number;
        let randomValue = Math.floor((Math.random() * 3) + 4);

        // add input value;
        data.splice(randomValue, 0, inputValue);

        // search index value;
        let red = data.lastIndexOf(inputValue);

        // store removed element;
        allData = data.slice(0, red);

        // remove data array element;
        data.splice(0, red);
    }
    else {
        console.log('sorry');
    }


    console.log([...allData, ...data]);


    input.value = '';

});



