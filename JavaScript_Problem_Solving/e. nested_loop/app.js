
// first nested loop example;
/* 
1st example for lopping:--

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/
(function firstExample() {
    const tableOne = document.getElementById('table-one');

    for (let i = 1; i <= 5; i++) {
        const createTr = document.createElement('tr');

        for (let j = 1; j <= i; j++) {

            const createTd = document.createElement('td');
            createTd.innerText = j;
            createTr.appendChild(createTd);

        }

        tableOne.appendChild(createTr);
    }
})();



// second nested loop example;
/* 
2nd example for lopping:--

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5 

*/
(function secondExample() {
    const tableTwo = document.querySelector('#table-two');

    for (let i = 1; i <= 5; i++) {
        const createTr = document.createElement('tr');

        for (let j = 1; j <= i; j++) {

            const createTd = document.createElement('td');
            createTd.innerText = i;
            createTr.appendChild(createTd);

        }

        tableTwo.appendChild(createTr);
    }
})();


// third nested loop example;
/* 
3rd example for lopping:--

5 5 5 5 5 
4 4 4 4
3 3 3
2 2
1

*/
(function thirdExample() {
    const tableThree = document.getElementById('table-three');

    for (let i = 5; i >= 1; i--) {
        const createTr = document.createElement('tr');

        for (let j = 1; j <= i; j++) {

            const createTd = document.createElement('td');
            createTd.textContent = i;
            createTr.appendChild(createTd);

        }

        tableThree.appendChild(createTr);
    }
})();


// fourth nested loop example;
/* 
4th example for lopping:--

1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

*/
(function fourthFunction() {
    const tableFour = document.getElementById('table-four');

    for (let i = 5; i >= 1; i--) {
        const createTr = document.createElement('tr');

        for (let j = 1; j <= i; j++) {

            const createTd = document.createElement('td');
            createTd.innerText = j;
            createTr.appendChild(createTd);

        }

        tableFour.appendChild(createTr);
    }

})();


/* 
Note: I use Self-Invoked Function. It's called IIFE (Immediately Invoked Function Expression);  
*/