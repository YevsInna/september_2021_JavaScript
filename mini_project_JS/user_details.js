// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//

// Стилизация проекта -
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.

let wrap = document.getElementsByClassName('wrap')[0];

let url = new URL(location.href);
let jsonUserObject = url.searchParams.get('data');
let user = JSON.parse(jsonUserObject);

let userCard = document.createElement('div');
userCard.classList.add('user_card');

userCard.innerHTML = `<h2>${user.id}. ${user.name}</h2>
                      <p>Username - ${user.username}</p>   
                      <p>Email - ${user.email}</p>   
                      <p>Address: ${user.address.street} street, suite: ${user.address.suite},
                      ${user.address.city} city, zipcode: ${user.address.zipcode}, geolocation: ${user.address.geo.lat} lat,
                      ${user.address.geo.lng} lng</p>
                      <p>Phone: ${user.phone}</p>
                      <p>Website: ${user.website}</p>
                      <p>Company - ${user.company.name}</p>
                      <p>Company catchPhrase: ${user.company.catchPhrase}</p>
                      <p>Company bs: ${user.company.bs}</p>`;

let btnDiv = document.createElement('div');
btnDiv.classList.add('center');

let userPosts = document.createElement('button');
userPosts.classList.add('button-post');

userPosts.innerText = 'posts of current user';
let postTitles = document.createElement('div');
postTitles.classList.add('titles');

wrap.appendChild(userCard);
userCard.appendChild(btnDiv);
userCard.appendChild(postTitles);
btnDiv.appendChild(userPosts);

userPosts.addEventListener('click', function (id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                if (post.userId === user.id) {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.innerHTML = `<h4>${post.id}.  ${post.title}</h4>`;

                    let postDetails = document.createElement('a');
                    postDetails.innerText = 'Post details';
                    postDetails.classList.add('post-details');
                    postDetails.href = 'post_details.html?data=' + JSON.stringify(post);

                    postTitles.appendChild(postDiv);
                    postDiv.appendChild(postDetails);

                }
                ;
            }
            ;
        });

});


