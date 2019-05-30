const http = new library;

// GET Data
http.get('https://jsonplaceholder.typicode. com/posts', (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});

console.log('posts');

// Create Data
const data = {

    title: 'Saif Updated',
    body: 'Saif Rehman',
}
// POST Data
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
})

// PUT Data
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }

})

// DELETE Data
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res + 'POST DELETED');
    }
});