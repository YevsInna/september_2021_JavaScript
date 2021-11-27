// - Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
const validationName = (name)=>{
    let validName = name.replace('---',' ').replace('..',' ').replace('__',' ');
    console.log(validName);
  };
validationName(n1);
validationName(n2);
validationName(n3);
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const randomArray = (limit,length)=>{
    let arr = [];
    for (let i = 0; i < length; i++) {
       arr.push(Math.round(Math.random()*limit))
    };
    return arr;
};
let result = randomArray(100, 10);
console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortResult = result.sort((a,b)=>{
    return a-b;
});
console.log(sortResult);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterResult = result.filter(value => {
    if (value%2===0){
        return value;
    };
});
console.log(filterResult);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// value = String(value);
let mapResult = result.map(value =>value.toString());
console.log(mapResult);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
const sortNums =(arr,direction)=> {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } ;

};
let nums = [11,21,3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const sortDuration = (arr)=>{
    return arr.sort((a,b)=>b.monthDuration - a.monthDuration)
};
console.log(sortDuration(coursesAndDurationArray));

const filterDuration = (arr)=>{
    return arr.filter((value)=>value.monthDuration>5)
};
console.log(filterDuration(coursesAndDurationArray));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const cutString = (str,n)=>{
    const newArr = [];
    for (let i = 0; i < str.length; i++) {
        let cutString = str.substr(0, n)
        newArr.push(cutString);
        str = str.slice(n)
    };
    return newArr;
};
console.log(cutString('наслаждение',3));
// працює тому що slice робить змінену копію вихідного значення,
//     але уже без трьох вирізаних елементів і на наступну ітерацію заходить інша стрінга