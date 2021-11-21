// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area (a,b){
    return a*b
};
let area1 = area(3,5);
console.log(area1);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function s (r){
    return Math.PI*r**2
};
let s1 = s(7);
console.log(s1);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderArea (r,h){
    return 2*Math.PI*r*h
};
let cylinderArea1 = cylinderArea(2,4);
console.log(cylinderArea1);


// - створити функцію яка приймає масив та виводить кожен його елемент
function array (arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
};
let numbers = [1,3,78,56]
array(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createText(a){
document.write(`<p>${a}</p>`)
};
createText('Tут текст для параграфа, який створиться за дпомогою функції "createText".');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(b){
    document.write(`<ul>
                        <li>${b}</li>
                        <li>${b}</li>
                        <li>${b}</li>
                     </ul>`);
};
createUl('тут текст списка');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList(a,b){
    document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li>${b}</li>`);
    };
    document.write(`</ul>`)
};
createList(3,'text')


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createListOfArray(arr){
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    };
    document.write(`</ul>`)
};
let arr =[55,'hello', true];
createListOfArray(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function writeObject(arr){
    for (const a of arr) {
        document.write(`
        <div>${a.id}. name - ${a.name}, age: ${a.age} </div>
        `);
    };
};
let objects =[
    {id:1, name: 'Inna', age:38},
    {id:2, name: 'Maksim', age:43},
    {id:3, name: 'Bohdana', age:11},
    {id:4, name: 'Nazar', age:6},
];
writeObject(objects);