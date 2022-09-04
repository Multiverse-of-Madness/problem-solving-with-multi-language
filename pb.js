/*
প্রশ্নঃ-একটা এরে থাকবে যার মধ্যে অনেক গুলা ডাটা থাকবে  ['1', '2', '3', '4', '5', '6', '7','8',.......n],
এটার মাঝে মিনিমাম ৩ ইন্ডেক্স পর কখনো ৩,কখনো ৪,কখনো ৫ ইন্ডেক্স পর পর ডাটা কন্সার্ট করতে হবে। 
*/


function randomArrEle(array) {

    const newArr = array.slice(3);
    const randNum = Math.floor((Math.random() * newArr.length));
    
    console.log(newArr[randNum]);

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// randomArrEle 
randomArrEle(arr);

