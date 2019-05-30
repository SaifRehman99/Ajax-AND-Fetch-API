const lib = new http;


// GET HERE
lib.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res))
    .catch(err => console.log(err))




// Creating Data here
const data = {
    name: 'Saif Rehman',
    email: 'saifr9732@gmail.com',
}


// POST HERE
lib.post('https://jsonplaceholder.typicode.com/users', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));



// PUT HERE
lib.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));


// DELETE HERE
lib.delete('https://jsonplaceholder.typicode.com/users/2', data)
    .then(res => console.log(res))
    .catch(err => console.log(err));
