
// Execution Context saw var a and set up  a in memory space.
var a;
console.log(a);

if (a === undefined) {
    console.log('a is undefined!');
}
else {
    console.log('a is defined!');
}