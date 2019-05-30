const http = new library;

// Get post
http.get('https://jsonplaceholder.typicode.com/posts',(res)=>{
    console.log(res);
});

console.log('posts');