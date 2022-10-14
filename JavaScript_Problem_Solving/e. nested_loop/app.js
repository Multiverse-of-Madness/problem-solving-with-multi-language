function showData() {

    const tableOne = document.getElementById('demo');
    for (let i = 1; i <= 5; i++) {
        const createTr = document.createElement('tr');

        for (let j = 1; j <= i; j++) {

            const createTd = document.createElement('td');
            createTd.innerText = j;
            createTr.appendChild(createTd);
            
        }

        tableOne.appendChild(createTr)
    }

}

showData();