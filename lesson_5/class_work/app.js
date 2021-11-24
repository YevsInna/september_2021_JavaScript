// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let numbersMin = (a,b,c)=>{
    if (a<b && a<c){
        console.log(a)
    }else if (b<a && b<c){
        console.log(b)
    }else {
        console.log(c)
    };
};
numbersMin(7,1,-9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let numbersMax = (a,b,c)=>{
    if (a>b && a>c){
        console.log(a)
    }else if (b>a && b>c){
        console.log(b)
    }else {
        console.log(c)
    };
};
numbersMax(67,3,80);

// - створити функцію яка повертає найбільше число з масиву
let array = [46,87,0,28,55,-4];
const maxOfArray = (arr) =>{
    let maxNumber = arr[0];
    for (const item of arr) {
        if (item>maxNumber){
            maxNumber=item;
        };
    };
    // console.log(maxNumber)
    return maxNumber;
}
maxOfArray(array);


// - створити функцію яка повертає найменьше число з масиву
const minOfArray = (arr) => {
    let minNumber = arr[0];
    for (const item of arr) {
        if (item<minNumber){
            minNumber=item;
        };
    };
    // console.log(minNumber)
    return minNumber;
};
minOfArray(array);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumOfArray = (arr)=>{
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    };
    console.log(x)
    return x;
};
sumOfArray(array);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const avgOfArray = (arr)=>{
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i]
    };
    return x/arr.length;
};

console.log(avgOfArray(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const minMax = (arr)=>{
    let min = arr[0];
    let max = arr[0];
    for (const item of arr) {
        if (item<min){
            min = item
        };
        if (item>max){
            max = item
        };
    };
    console.log(max);
    return min;
};
console.log(minMax(array));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
const randomArray = (arrLength)=>{
    let randomArr = [];
    for (let i = 0; i < arrLength; i++) {
        randomArr[i] = Math.round(Math.random()*100)
    };
    console.log(randomArr)
};
randomArray(9);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
const randomLimitArray = (arrLength, limit)=>{
    let randomArr = [];
    for (let i = 0; i < arrLength; i++) {
        randomArr[i] = Math.round(Math.random()*limit)
    };
    console.log(randomArr)
};
randomLimitArray(5, 200);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const reverseArr = (arr) => {
  let reverseArray = [];
    for (let i = arr.length-1; i >0; i--) {
        reverseArray.push(arr[i]);
    };
    console.log(reverseArray)
};
reverseArr(array);

