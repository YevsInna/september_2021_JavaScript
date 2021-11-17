// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let number = [24,89,37,43,99];
// let string = ['Inna', 'Maksim', 'Bohdana', 'Nazar', 'Perchyk'];
// let mixed = [87, 'Ukraine', true, 10, false];
// console.log(number);
// console.log(string);
// console.log(mixed);
//






// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// console.log(arr);






// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>some text</div>`);
// }





// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>index - ${[i]}</div>`);
// }





// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i<20){
//     document.write(`<div><h1>Some title</h1></div>`)
// i++;
// }





// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i<20){
//     document.write(`<div><h1>index ${i}</h1></div>`)
//     i++;
// }





// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers =[25,78,90,56,1998,9765,65,20,0,77];
// for (const number of numbers) {
//     console.log(number)
// };
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strings = ['do', 're', 'mi', 'fa', 'sol', 'lya', 'si', 'do', 'si', 'lya'];
// for (const string of strings) {
//     console.log(string)
// };
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mixed = [87, 'Ukraine', true, 10, false, 75, 'Vyshhorod', true, 'IT', 21];
// let i = 0;
// while (i<mixed.length){
//     console.log(mixed[i])
//     i++;
// };







// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mixed = [87, 'Ukraine', true, 10, false, 75, 'Vyshhorod', true, 'IT', 21];
//
// for (const mixedElement of mixed) {
//    if (typeof mixedElement === 'boolean'){
//        console.log(mixedElement);
//    };
// };
// for (const mixedElement of mixed) {
//     if (typeof mixedElement === 'number'){
//         console.log(mixedElement);
//     };
// };
// for (const mixedElement of mixed) {
//     if (typeof mixedElement === 'string'){
//         console.log(mixedElement);
//     };
// };






// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 'hello';
// arr[1] = 'buy';
// arr[2] = true;
// arr[3] = 99999;
// arr[4] = 'cool';
// arr[5] = 7878;
// arr[6] = false;
// arr[7] = true;
// arr[8] = 100;
// arr[9] = 'hot';
// for (const arrElement of arr) {
//     console.log(arrElement);
// };





// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// };





// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// };





// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// };



// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2===0){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     };
//  };


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 !==0){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     };
// };
