// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numbersMin(a,b,c){
    if (a<b && a<c){
        console.log(a)
    }else if (b<a && b<c){
        console.log(b)
    }else if (c<a && c<b){
        console.log(c)
    };
};
numbersMin(67,3,80);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function numbersMax(a,b,c){
    if (a>b && a>c){
        console.log(a)
    }else if (b>a && b>c){
        console.log(b)
    }else if (c>a && c>b){
        console.log(c)
    };
};
numbersMax(67,3,80);


// - створити функцію яка повертає найбільше число з масиву
function maxOfArray([]){
    let maxNumber = arr[0];
    for (const item of arr) {
        if (item>maxNumber){
            maxNumber=item;
        };
    };
    return maxNumber
};
let arr = [498,67,902,36,291];
let maxNumberOfArray = maxOfArray(arr);
console.log(maxNumberOfArray);



// - створити функцію яка повертає найменьше число з масиву
function minOfArray([]){
    let minNumber = arr[0];
    for (const item of arr) {
        if (item<minNumber){
            minNumber=item;
        };
    };
    return minNumber
};

let minNumberOfArray = minOfArray(arr);
console.log(minNumberOfArray);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfArray([]){
let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    };
    return x;
};
let sum = sumOfArray(arr);
console.log(sum);
// 1794



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageOfArray([]){
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    };
    return x/arr.length;
};
let average = averageOfArray(arr);
console.log(average);
// 358.8


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function minMax([]){
    let min = arr[0];
    let max = arr[0];
    for (const item of arr) {
        if (item<min){
            min = item
        }
        if (item>max){
            max = item
        }
    };
    console.log(max);
   return min;

};
let minOfArr = minMax(arr);
console.log(minOfArr);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArray (arrLength){
let randomArr = [];
    for (let i = 0; i < arrLength; i++) {
       randomArr[i] = Math.round(Math.random()*100)
    };
    console.log(randomArr)
    return randomArr;
};
randomArray(6);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function randomLimitArray (arrLength, limit){
    let randomArr = [];
    for (let i = 0; i < arrLength; i++) {
        randomArr[i] = Math.round(Math.random()*limit)
    };
    console.log(randomArr)
    return randomArr;
};
randomLimitArray(10, 20);



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverseArr ([]){
    let reverseArray =[]
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }
    console.log(reverseArray);
};
reverseArr(arr);