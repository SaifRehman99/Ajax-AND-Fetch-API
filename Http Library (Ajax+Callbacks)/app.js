const http = new library;

// Get post
const posts = http.get('https://jsonplaceholder.typicode.com/posts');
console.log(posts)