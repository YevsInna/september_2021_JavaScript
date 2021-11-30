// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
const idContent = document.getElementById('content');
console.log(idContent);
// -- отримує текст з блоку з id "rules"
const idRules = document.getElementById('rules');
console.log(idRules);
// -- замініть текст параграфа з id 'content' на будь-який інший
idContent.innerText = 'Я змінила текст в параграфі з id "content" за допомогою властивості innerText.';
// -- замініть текст параграфа з id 'rules' на будь-який інший
idRules.innerHTML = '<b>Я змінила текст в параграфі з id "rules" за допомогою властивості innerHTML.</b>'
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let allElements = document.body.children;
for (const element of allElements) {
    element.style.backgroundColor = 'red';
    element.style.color = 'blue';
};
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classOfRules = idRules.children;
console.log(classOfRules);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let allElementFcRules = document.getElementsByClassName('fc_rules');
for (const element of allElementFcRules) {
    element.style.color = 'red'
}