// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let wrap = document.getElementsByClassName('wrap')[0];
fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(users =>{
    for (const user of users) {
       let userDiv = document.createElement('div');
       userDiv.classList.add('user');
       userDiv.innerHTML = `<h3>${user.id}. ${user.name}</h3>
                            <p>Username - ${user.username}</p>
                            <p>Email: ${user.email}</p>
                            <p>Address: ${user.address.street} street, suite: ${user.address.suite}, zipcode: ${user.address.zipcode},
                            geolocation: lat ${user.address.geo.lat}, lng ${user.address.geo.lng}</p>
                            <p>Phone: ${user.phone}</p>
                            <p>Website: ${user.website}</p>
                            <p>Company: name - ${user.company.name}, catchPhrase: ${user.company.catchPhrase}, bs: ${user.company.bs}</p>`

       let btnPosts = document.createElement('button');
       btnPosts.innerText = 'Show posts';


       btnPosts.onclick = function (id){
         fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
         .then(value => value.json())
         .then(posts =>{
             for (const post of posts) {
                 if (post.userId === user.id){
                     let postDiv = document.createElement('div');
                     postDiv.classList.add('post');
                     postDiv.innerHTML = `<h3>Post # ${post.id}</h3>
                     <p>Post title: ${post.title}</p>
                     <p>${post.body}</p>`

                     let btnComments = document.createElement('button');
                     btnComments.innerText = 'Show comments'

                     userDiv.appendChild(postDiv);
                     postDiv.appendChild(btnComments);

                     btnComments.onclick = function (id){
                         fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                         .then(value => value.json())
                         .then(comments =>{
                             for (const comment of comments) {
                                 if (post.id === comment.postId){
                                     let commentDiv = document.createElement('div');
                                     commentDiv.classList.add('comment');
                                     commentDiv.innerHTML = `<h4>Comment ${comment.id} to the post # ${comment.postId}</h4>
                                                             <p>${comment.name}</p>   
                                                             <p>Email: ${comment.email}</p> 
                                                             <p>${comment.body}</p> `

                                     postDiv.appendChild(commentDiv);
                                 }
                             }

                         });
                     }

                 }
             }
         });

       };


       wrap.appendChild(userDiv);
       userDiv.appendChild(btnPosts);
    };
});
