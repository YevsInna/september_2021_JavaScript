// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.classList.add ('september-2021');
// b) робить шириниу елементу ul 400px
let ulList = document.getElementsByTagName('ul');
let liList = ulList[0];
liList.style.width = '400px';
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const link of linkList) {
    link.style.width = '50%'
};
// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (const item of listElement2) {
    console.log(item.innerText)
};
// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li');
for (const li of allLi) {
    li.style.backgroundColor = 'silver'
};
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let a = document.getElementsByTagName('a');
for (const aElement of a) {
    aElement.classList.add('anchor')
    if (aElement.innerText ==='link3'){
      aElement.style.fontSize = '40px'
    };
    let elementText = aElement.innerText;
    aElement.classList.add(`element_${elementText}`)
};

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.getElementsByClassName('sub-header');
// let color = prompt('enter color');
// for (const item of subHeader) {
//     item.style.backgroundColor = color
// };
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let color2 = prompt('enter another color');
// for (const item of subHeader) {
//     if (item.innerText === 'content 2 segment'){
//         item.style.backgroundColor = color2
//     };
// };
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let content1 = document.getElementsByClassName('content_1');
// let text = prompt('enter some text');
// content1[0].innerText = text;

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (const pElement of p) {
    pElement.style.padding = '20px'
};
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const item of text2) {
    item.innerText = 'sep-2021'
};