// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.length);
let lorem = 'lorem ipsum';
console.log(lorem.length);
let js = 'javascript is cool';
console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr);
let upperCaseLorem = lorem.toUpperCase();
console.log(upperCaseLorem);
let upperCaseJs = js.toUpperCase();
console.log(upperCaseJs);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCaseStr = upperCaseStr.toLowerCase();
console.log(lowerCaseStr);
let lowerCaseLorem = upperCaseLorem.toLowerCase();
console.log(lowerCaseLorem);
let lowerCaseJs = upperCaseJs.toLowerCase();
console.log(lowerCaseJs);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string = ' dirty string   ';
let stringTrim = string.trim();
console.log(stringTrim);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
const stringToArray = (str)=>{
    let split = str.split(' ');
    document.write(`<h1>${split}</h1>`);
    console.log(split)

};
let str2 = 'Каждый охотник желает знать';
stringToArray(str2);
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
const deleteCharacters = (str, length)=>{
    let slice = str.slice(0,length);
    document.write(`<h1>${slice}</h1>`);
    console.log(slice)

};
deleteCharacters(str2, 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
const insertDash = (str) => {
  let s = str.replaceAll(' ', '-').toUpperCase();
    document.write(`<h1>${s}</h1>`);
    console.log(s)
}
let str3 = 'HTML JavaScript PHP';
insertDash(str3);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const upperCase = (str)=>{
    let newString = str[0].toUpperCase() + str.slice(1);
    document.write(`<h1>${newString}</h1>`);
    console.log(newString)
};
upperCase(str);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const capitaliz =(str)=>{
   let split = str.split(' ');
    for (const splitElement of split) {
       let newElement = splitElement[0].toUpperCase()+splitElement.slice(1);
        document.write(`<h1>${newElement}</h1>`);
    }

};
capitaliz(str);
