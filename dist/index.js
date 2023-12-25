"use strict";
const authorOne = {
    name: 'Mario',
    avatar: './images//mario.png',
};
const newPost = {
    title: 'My new post',
    body: 'Something intereseting',
    tags: ['gaming'],
    createAt: new Date(),
    author: authorOne,
};
//as funtion argument types
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//with arrays
let posts = [];
posts.push({
    title: 'my second post',
    body: 'again something interesting',
    tags: ['bookkeeping'],
    createAt: new Date(),
    author: authorOne,
});
console.log(posts[0].body);
