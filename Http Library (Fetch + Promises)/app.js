const lib = new http;


lib.get('https://jsonplaceholder.typicode.com/users')
.then(res => console.log(res))
.catch(err => console.log(err))
