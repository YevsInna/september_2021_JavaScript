// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr = [];
// let x = 0;

// for (let i =0; i<50; i++){
//    arr[i]=x;
//    x+=2;
//     console.log(arr[i]);
//     };

// let x = 1;
// for (let i =0; i<50; i++){
//     arr[i]=x;
//     x+=2;
//     console.log(arr[i]);
// };
















// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc = ['a','b','c'];

for (let i = 0; i < abc.length; i++) {
    console.log(abc[0]+abc[1]+abc[2]);
    };

let i =0;
while (i<abc.length){
    console.log(abc[0]+abc[1]+abc[2]);
    i++;
};

for (const item of abc) {
    console.log(abc[0]+abc[1]+abc[2]);
}
