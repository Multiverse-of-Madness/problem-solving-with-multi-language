let input = document.querySelector('.input-data');

let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
// console.log(data.length);




document.querySelector('.button-clicked').addEventListener('click', function () {




    
    if (3 <= data.length) {
        // input value;
        const inputValue = input.value;
        // generate random number;
        let randomValue = Math.floor((Math.random() * 3) + 3);

        // add input value;
        data.splice(randomValue, 0, inputValue);

        // search index value;
        let red = data.lastIndexOf(inputValue);

        // store removed element;
        allData = data.slice(0, red);


        console.log("all data",allData);

        data.splice(0, red);
        
        data = data;

    }
    else {
        console.log('sorry');
    }

    console.log(data);

    input.value = '';

});

















    // let index = data.lastIndexOf(input.value);
    // data.splice(0, index);
    // const dataIndex = data.slice(0, index);


    // let randomValue = Math.floor((Math.random() * 3) + 3);
    // data[randomValue] = input.value;

    // let datas;

    // if (data.lastIndexOf(input.value) === -1) {
    //     data.splice(0, data.indexOf(input.value));
    //     datas = data.splice(0, data.indexOf(input.value));
    // }
    // else {
    //     let index = data.lastIndexOf(input.value);
    //     data.splice(0, index);
    //     datas = data.splice(0, index);

    // }

    // let randomValue = Math.floor((Math.random() * 3) + 3);
    // data[randomValue] = input.value;
    // console.log(randomValue);

    // console.log([...datas, ...data]);

    // console.log([...dataIndex ,...data]);

    // console.log(data);