# Functions in Modern Javascript

### this is an example of function declaration syntax
```
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total =+ products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 30], 0.2))
```
### in this example we use arrow function syntax
```
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10, 15, 30], 0.2))
```
## Here we introduce the callback function in simple code
```
const name = 'shaun';
// functions
const greet = () => "hello";

let resultOne = greet();
console.log(resultOne);

//methods

let resultTwo = name.toUpperCase()
console.log(resultTwo);
```
# What are callback functions?
### Callback functions are simply functions we call into another function as an argument.
```
const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};
myFunc (value => {
    // do something
    console.log(value);
});
```

## Methods are just functions
### .forEach() method iterates over an array (elegant version of loop)
```
let people = ['mario', luigi, 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - heelo ${person}`);
    };
    //

people.forEach((person, index) => {
    console.log(index, person);
});
```
### However, we can pass our logPerson function in our forEach method.
```
let people = ['mario', luigi, 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - heelo ${person}`);
    };
    //

people.forEach(logPerson);
```
## Final Callback Function Example
### use forEach to iterate through each element and fire a callback function. We will use for each to create an HTML template.
```
const ul = document.querySelector('.people');

const people = ['mario', luigi, 'ryu', 'shaun', 'chun-li'];

let html = '';

people.forEach(function(person){
    // create html template for each person
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
//places html inside ul.innerHTML
ul.innerHTML = html;