// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// document.onclick = function (e){
//     console.log(`назва тегу: ${e.target.nodeName}`);
//     console.log(`список class: ${e.target.className}`);
//     console.log(`список id: ${e.target.id}`);
//     console.log(`розмір елементу: висота ${e.target.clientHeight} px, ширина ${e.target.clientWidth} px`);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let popUp = document.createElement('div');
popUp.style.position = 'absolute';
popUp.style.top = '-300px';
popUp.style.backgroundColor = 'pink';
popUp.style.borderRadius = '10px';
popUp.style.padding = '10px';
document.body.appendChild(popUp);

document.onclick = function (e) {
    popUp.style.top = '300px';
    popUp.style.left = '300px';
    popUp.style.transition = '0.6s';
    popUp.innerText = `назва тегу: ${e.target.nodeName},
     список class: ${e.target.className},
     список id: ${e.target.id},
     розмір елементу: висота ${e.target.clientHeight} px,
     ширина ${e.target.clientWidth} px`

}


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let checkBox1 = document.createElement('input')
// checkBox1.setAttribute("type", "checkbox");
//
// let checkBox2 = document.createElement('input')
// checkBox2.setAttribute("type", "checkbox");
//
// let checkBox3 = document.createElement('input')
// checkBox3.setAttribute("type", "checkbox");
//
// document.body.appendChild(checkBox1);
// document.body.appendChild(checkBox2);
// document.body.appendChild(checkBox3);
//
// checkBox1.onclick = function () {
//     if (this.checked) {
//         let usersFilter = usersWithAddress.filter(value => !value.status);
//         for (const item of usersFilter) {
//             let divElement = document.createElement('h3');
//             document.body.appendChild(divElement);
//             divElement.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
////         };
//     };
// };
//
// checkBox2.onclick = function () {
//     if (this.checked) {
//         let usersFilter = usersWithAddress.filter(value => value.age >= 29);
//         for (const item of usersFilter) {
//             let divElement = document.createElement('h3');
//             document.body.appendChild(divElement);
//             divElement.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
//
//         };
//     };
// };
//
// checkBox3.onclick = function () {
//     if (this.checked) {
//         let usersFilter = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//         for (const item of usersFilter) {
//             let divElement = document.createElement('h3');
//             document.body.appendChild(divElement);
//             divElement.innerText = `${item.id} ${item.name} ${item.age} ${item.status} ${item.address.city} ${item.address.street} ${item.address.number}`;
//
//         };
//     };
// };


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу
// (лежащему на одном уровне).
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка.
// и тд.   Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.




//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан





