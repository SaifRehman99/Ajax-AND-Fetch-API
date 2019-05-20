// ===========================================PROMISES ===========================================//
/* Instead of providing a callback, a promise has its own methods which you call to tell the promise what will happen
 when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result
  is available and “catch(…)” for when something went wrong.
*/

// EXAMPLE#1

// returning a promise here
function getAsyncData(someValue) {
    return new Promise(function (resolve, reject) {
        getData(someValue, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        })
    });
}
getAsyncData('value').then((res) => {

    //...data
}).catch((rej) => {
    //....error
})


// EXAMPLE#2
let person = [
    {
        name: 'John',
        age: 13
    }, {
        name: 'Mark',
        age: 13
    }, {
        name: 'Boston',
        age: 13
    }, {
        name: 'Brad',
        age: 13
    },
]

const div = document.querySelector('#div');

// printing the name here
const printingArray = () => {


    person.forEach((item) => {
        setTimeout(() => {
            div.innerHTML += `<li>${item.name}</li>`

        }, 1200);

    })
}

const updatingArray = (data) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // first push the data
            person.push(data);
        }, 2000);

        let err = false;
        if(!err){
            res();
        }
        else{
            rej('Error');
        }

    })

}
console.log(person)
updatingArray({ name: 'ALi', age: 19 }).then(printingArray)
.catch((err) => {
    console.log(err)
})

let fetchData = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    console.log(res.json())
}).then((rej) =>{
    console.log(rej)
})