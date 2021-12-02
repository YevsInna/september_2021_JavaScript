// Все робити за допомоги js.
// - створити блок,
// let divElement = document.createElement('div');

//     - додати йому класи wrap, collapse, alpha, beta
// divElement.classList.add('wrap','collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// в css файлі

// - додати цей блок в body.
// document.body.appendChild(divElement);

// - клонувати його повністю, та додати клон в body.
// let cloneElement = divElement.cloneNode(true);
// document.body.appendChild(cloneElement);


// - Є масив:
let menu = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let divMenu = document.getElementsByClassName('menu');
for (const item of menu) {
    let liElement = document.createElement('li');
    divMenu[0].appendChild(liElement);
    liElement.innerText = `${item}`
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const item of coursesAndDurationArray) {
//   let divElement = document.createElement('div');
//   divElement.innerText = `Курс - ${item.title}, тривалість - ${item.monthDuration} місяців.`;
//   document.body.appendChild(divElement);
// };



// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let divElement = document.createElement('div');
    divElement.classList.add('item');
    document.body.appendChild(divElement);
    let h1Element = document.createElement('h1');
    h1Element.classList.add('heading');
    h1Element.innerText = `${course.title}`
    divElement.appendChild(h1Element);
    let pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.innerText = ` Тривалість курсу - ${course.monthDuration} місяців.`;
    divElement.appendChild(pElement);

}