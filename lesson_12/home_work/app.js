// 1.
// Отримати відповідь з цього ресурсу та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// let wrap = document.getElementsByClassName('wrap')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(value => value.json())
// .then(value =>{
//     for (const valueElement of value) {
//         let post = document.createElement('div');
//         post.classList.add('post');
//         let title = document.createElement('h2');
//         title.innerText = `User - ${valueElement.userId}, post - ${valueElement.id}`;
//         let postTitle = document.createElement('h3');
//         postTitle.innerText = `Post title - ${valueElement.title}`;
//         let postBody = document.createElement('p');
//         postBody.innerText = valueElement.body;
//
//         wrap.appendChild(post);
//         post.appendChild(title);
//         post.appendChild(postTitle);
//         post.appendChild(postBody);
//     };
// });


//     2.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// let wrap2 = document.getElementsByClassName('wrap2')[0];
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(value => value.json())
// .then(value =>{
//     for (const valueElement of value) {
//         let comment = document.createElement('div');
//         comment.classList.add('comment')
//         let postId = document.createElement('h2');
//         postId.innerText = `Comment to the ${valueElement.postId} post`;
//         let commentId = document.createElement('h3');
//         commentId.innerText = `Comment # ${valueElement.id}`;
//         let name = document.createElement('p');
//         name.innerText = `Name: ${valueElement.name}`;
//         let email = document.createElement('p');
//         email.innerText = `Email: ${valueElement.email}`;
//         let body = document.createElement('p');
//         body.innerText = valueElement.body;
//
//         wrap2.appendChild(comment);
//         comment.appendChild(postId);
//         comment.appendChild(commentId);
//         comment.appendChild(name);
//         comment.appendChild(email);
//         comment.appendChild(body);
//     };
// });

