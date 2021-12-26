// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу
// user-details.html, которая имеет детальную информацию про объект на который кликнули

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.

let wrap = document.getElementsByClassName('wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = `<h2>${user.id}. ${user.name}</h2>`;
            let details = document.createElement('a');
            details.innerText = 'details';
            details.href = 'user_details.html?data=' + JSON.stringify(user);

            wrap.appendChild(userDiv);
            userDiv.appendChild(details);
        }
        ;
    });

// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, чтобы
// было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

