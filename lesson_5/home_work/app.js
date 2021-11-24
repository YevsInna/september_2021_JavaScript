// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника висотою
const rectangleArea = (a, b) => a * b;
console.log(rectangleArea(4,9));


// // - створити функцію яка обчислює та повертає площу кола
const circleArea = (r)=>Math.PI*r**2;
console.log(circleArea(7));


// - створити функцію яка обчислює та повертає площу циліндру
const cylinderArea = (r,h)=>Math.PI*2*r*h;
console.log(cylinderArea(3,5));


// - створити функцію яка приймає масив та виводить кожен його елемент
const numbers = [9,8,7,6,5,4,3,2,1];
const arr =(n)=>{
    for (const item of n) {
        console.log(item);
    };
};
arr(numbers);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const createText = (text)=>{
    document.write(`<p>${text}</p>`);
};
createText('some text');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (text)=>{
    document.write(`
           <ul>
             <li>${text}</li>
             <li>${text}</li>
             <li>${text}</li>
           </ul>`
);
};
createList('item of list');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createList2 = (text,a)=>{
    for (let i = 0; i < a; i++) {
        document.write(`
           <ul>
             <li>${text}</li>
           </ul>`
        );
    };

};
createList2('item of list 2', 4);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const data = [4,'hello', true];
const createList3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`
            <ul>
                <li>${arr[i]}</li>
            </ul>
        `);

    };
};
createList3(data);
//

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const objects = [{id:1,
                 name:'Inna',
                 age: 38},
                {id:2,
                 name:'Max',
                 age: 43},];
const writeObject = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}. name - ${arrElement.name}, age: ${arrElement.age}</div>`)
    };
};
writeObject(objects);