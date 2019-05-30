// ===================================================Async Await ===================================================//
/*Async/Await is the next step in the evolution of handling asynchronous operations in JavaScript.
 It gives you two new keywords to use in your code: “async” and “await”.
  Async is for declaring that a function will handle asynchronous operations and 
  await is used to declare that we want to “await” the result of an asynchronous operation inside a function
   that has the async keyword.
*/

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
        if (!err) {
            res();
        }
        else {
            rej('Error');
        }

    })

}
console.log(person)

async function dataFetching() {

    await updatingArray({ name: 'Ali', age: 19 });
    printingArray()
}
dataFetching()

// fetching the api data using async await
async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)

}

fetchData()

async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()