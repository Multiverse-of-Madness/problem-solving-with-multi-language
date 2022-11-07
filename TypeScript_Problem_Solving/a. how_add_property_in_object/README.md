# How add new property use typeScript

### Input:

    const myObj: { [key: string]: any } = {

        start: 'Super Set'

    };

    myObj.firstProperty = 'Hello TypeScript';

    myObj.secondProperty = 10000;

    myObj.thirdProperty = true;

    myObj['fourthProperty'] = 'Last and final';

    console.log(myObj);

### Output:

    {
        start:'Super Set', 
        firstProperty:'Hello TypeScript',
        secondProperty: 10000, 
        thirdProperty:true,
        fourthProperty: 'Last and final'
    }

