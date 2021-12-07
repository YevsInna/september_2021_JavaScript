// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.getElementById('text');
// let btn = document.createElement('button');
// btn.innerText = 'to make text invisible';
// document.body.appendChild(btn);
//
// btn.onclick = function (){
//     text.style.display = 'none';
// };

//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn2 = document.createElement('button');
// btn2.innerText = 'press me';
// document.body.appendChild(btn2);
//
// btn2.onclick = function (){
//     btn2.style.display = 'none'
// };


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
// та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.forms.form.onsubmit = function (e){
//     e.preventDefault();
//     let age = this.age.value;
//    if (age>18){
//        alert('You are welcome!')
//    } else if (age <= 18 && age >0){
//        alert('You are too young')
//    } else {
//        alert('You enter wrong age')
//    };
// };



// - Создайте меню, которое раскрывается/сворачивается при клике
let btn = document.getElementById('btn');
let menu = document.getElementById('menu');
btn.onclick = function (){
menu.classList.toggle('display');
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {title : 'comment 1', body:'Отправь это селфи в NASA, потому что ты звезда'},
    {title : 'comment 2', body:'Этот взгляд заслуживает аплодисментов'},
    {title : 'comment 3', body:'Пришел, увидел, забыл, что хотел'},
    {title : 'comment 4', body:'Это лучшее, что я видел за последнее время))))'},
];
for (const comment of comments) {
    let commentDiv = document.createElement('div');
    let commentTittle = document.createElement('h3');
    commentTittle.innerText = comment.title;
    let commentBody = document.createElement('p');
    commentBody.innerText = comment.body;
    let btn = document.createElement('button');
    btn.innerText = 'Close'

    document.body.appendChild(commentDiv);
    commentDiv.appendChild(commentTittle);
    commentDiv.appendChild(commentBody);
    commentDiv.appendChild(btn);

    btn.onclick = function (){
        commentBody.style.display = 'none';
    };
};
