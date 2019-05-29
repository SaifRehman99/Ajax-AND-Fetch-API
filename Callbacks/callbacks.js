//=================================================CALLBACK=================================================//
/*
Callback is function which executed after the function call
Function taking function as an argument (CALLBACK FUNCTION) and returned by another function,
these type of function are called HIGH ORDER FUNCTION.

JavaScript is an event driven language means it doesnt wait for the response, it keep executing
*/

// EXAMPLE#1
let first = () => {
    console.log(1)
}

let second = () => {
    console.log(2)
}
first();
second();

// OUTPUT
//1
//2


//EXAMPLE#2
let first1 = () => {
    setTimeout(() => {
        console.log(1)
    }, 1000);
}

let second2 = () => {
    console.log(2)
}

// OUTPUT
//2
//1


// EXAMPLE#3
let work = (callback) => {
    setTimeout(() => {
        console.log('Washing Kaprey');
        callback()
    }, 1200);
}

let workDone = () => {
    console.log('kaprey Dhul gaye');
}

work(workDone);


// EXAMPLE#4
// making an array of objects
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

const updatingArray = (data, callback) => {
    setTimeout(() => {
        // first push the data
        person.push(data);
        // then call the printing array function
        callback();

    }, 2000);
}
console.log(person)
updatingArray({ name: 'ALi', age: 19 }, printingArray);

// Reason of shifting from Callback to Promises is CALLBACK HELL
// Callback Hell means passing nested function again and again,it creates a Callback Hell  
request('http://www.somepage.com', function (firstError, firstResponse, firstBody) {
    if (firstError) {
        // Handle error.
    }
    else {
        request(`http://www.somepage.com/${firstBody.someValue}`, function (secondError, secondResponse, secondBody) {
            if (secondError) {
                // Handle error.
            }
            else {
                // Use secondBody for something
                request(`http://www.somepage.com/${firstBody.someValue}`, function (thridError, thirdResponse, thirdBody) {

                }
        });
    }
});