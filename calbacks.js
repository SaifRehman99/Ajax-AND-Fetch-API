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