// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
// їх між собою.
function arg(){
    if (arguments.length>1){
        console.log(arguments[0]+arguments[1])
        }else{
        console.log(arguments)
    };

};
arg('hello');
arg(6,90);


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
function sumArray(a,b){
    let newArr=[];
    for (let i = 0; i < a.length; i++) {
        for (let i = 0; i < b.length; i++) {
            newArr[i]= a[i]+b[i]
        };
    };
    return newArr
};
let newArr = sumArray([1,2,3,4],[2,3,4,5] );
console.log(newArr);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function keys(arr){
//     let keysArr =[];
//     for (const item of arr) {
//         for(const key in item){
//             keysArr.push(key);
//         };
//     };
//     return keysArr;
// };
// let objects=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// let result = keys(objects);
// console.log(result);


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function keysValues(arr){
    let values =[];
    for (const item of arr) {
        for(const key in item){
            values.push(item[key]);
        };
    };
    return values;
};
let objects=[{name: 'Dima', age: 13}, {model: 'Camry'}];
let result = keysValues(objects);
console.log(result);
