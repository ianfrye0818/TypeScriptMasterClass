//interfaces
interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: 'Mario',
  avatar: './images//mario.png',
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  createAt: Date;
  author: Author;
}

const newPost = {
  title: 'My new post',
  body: 'Something intereseting',
  tags: ['gaming'],
  createAt: new Date(),
  author: authorOne,
};
//as funtion argument types
function createPost(post: Post): void {
  console.log(`created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

//with arrays
let posts: Post[] = [];

posts.push({
  title: 'my second post',
  body: 'again something interesting',
  tags: ['bookkeeping'],
  createAt: new Date(),
  author: authorOne,
});
console.log(posts[0].body);
