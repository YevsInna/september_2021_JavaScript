// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let wrap = document.getElementsByClassName('wrap')[0];

fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(posts =>{
    for (const post of posts) {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post');
        let title = document.createElement('h2');
        title.innerText = `User - ${post.userId}, post - ${post.id}`;
        let postTitle = document.createElement('h3');
        postTitle.innerText = `Post title - ${post.title}`;
        let postBody = document.createElement('p');
        postBody.innerText = post.body;
        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');
        let btn = document.createElement('button');
        btn.innerText = 'show comments';
        btn.onclick = function (id) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                .then(value => value.json())
                .then(comments => {
                    for (const comment of comments) {
                        if (comment.postId === post.id ) {

                            let commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            let idPost = document.createElement('h2');
                            idPost.innerText = `Comment to the ${comment.postId} post`;
                            let commentId = document.createElement('h3');
                            commentId.innerText = `Comment # ${comment.id}`;
                            let name = document.createElement('p');
                            name.innerText = `Name: ${comment.name}`;
                            let email = document.createElement('p');
                            email.innerText = `Email: ${comment.email}`;
                            let body = document.createElement('p');
                            body.innerText = comment.body;

                            postDiv.appendChild(commentsDiv);
                            commentsDiv.appendChild(commentDiv);
                            commentDiv.appendChild(idPost);
                            commentDiv.appendChild(commentId);
                            commentDiv.appendChild(name);
                            commentDiv.appendChild(email);
                            commentDiv.appendChild(body);
                        };
                    };
                });
        };

        wrap.appendChild(postDiv);
        postDiv.appendChild(title);
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);
        postDiv.appendChild(btn);
    };
});
