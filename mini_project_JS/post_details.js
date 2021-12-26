// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.

let wrap = document.getElementsByClassName('wrap')[0];

let url = new URL(location.href);
let jsonPostObject = url.searchParams.get('data');
let post = JSON.parse(jsonPostObject);

postCard = document.createElement('div');
postCard.classList.add('post_card');

postCard.innerHTML = `<h2>User ${post.userId}, post ${post.id}</h2>
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>`;

let btnComments = document.createElement('button');
btnComments.innerText = 'Comments of current post';
btnComments.classList.add('button-comment');

btnComments.onclick = function (id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(value => value.json())
        .then(comments => {
            let commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments');
            for (const comment of comments) {
                if (post.id === comment.postId) {
                    let commentCard = document.createElement('div');
                    commentCard.classList.add('comment');
                    commentCard.innerHTML = `<h4>Comment ${comment.id} to the post ${comment.postId}</h4>
                                                             <p>${comment.name}</p>   
                                                             <p>Email: ${comment.email}</p> 
                                                             <p>${comment.body}</p> `;

                    postCard.appendChild(commentsDiv);
                    commentsDiv.appendChild(commentCard);
                }
                ;
            }
            ;
        });
};


wrap.appendChild(postCard);
postCard.appendChild(btnComments);












