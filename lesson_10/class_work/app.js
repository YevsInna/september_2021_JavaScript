//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.forms.form1;
// let form2 = document.forms.form2;
// let btn = document.getElementById('btn');
// btn.onclick = function (){
//     console.log(form1.username.value);
//     console.log(form1.age.value);
//     console.log(form2.username.value);
//     console.log(form2.age.value);
// };
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'create table';
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(input3);
document.body.appendChild(btn);
btn.addEventListener('click',  function () {
    let tr = input1.value;
    let td = input2.value;
    let data = input3.value;

    function createTable (tr,td,data){
        let table = document.createElement('table');
        // let divTable = document.createElement('div');
        table.style.border = 'solid 1px green';
        // divTable.appendChild(table);
        document.body.appendChild(table);

        for (let i = 0; i < tr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = 'solid 1px black';
            for (let j = 0; j < td; j++) {
                let td = document.createElement('td');
                td.style.border = 'solid 1px red';
                td.innerText = `${data}`;
                table.appendChild(tr);
                tr.appendChild(td);

            };
        };
    };
    createTable(tr,td,data);

});



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let badWords = ['бляха-муха', 'йопересете', 'шайзе'];
//
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'submit';
//
// document.body.appendChild(input);
// document.body.appendChild(btn);
//
// btn.addEventListener('click', function (){
//     let wordFromInput = input.value;
//     for (const word of badWords) {
//         if (word === wordFromInput){
//             alert('тут не вживають нецензурну лексику!');
//         };
//     };
// });



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let badWords = ['бляха-муха', 'йопересете', 'шайзе'];

let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'submit';

document.body.appendChild(input);
document.body.appendChild(btn);

btn.addEventListener('click', function (){
    let sentence = input.value;
    let string = sentence.split(' ');
    for (const word of badWords) {
        for (let item of string) {
            if (item === word){
                alert('тут не вживають нецензурну лексику!');
            };
        };
return;
    };
});
