// third
function b() {
    var myVar;
    console.log(myVar);
}
// second
function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}
// first
var myVar = 1;
console.log(myVar);
a();
// fourth - this invocation happens in global execution environment - function b and a have been removed from the stack by the time the command gets to this invocation.
console.log(myVar);
// output in console should be 1, 2, undefined, 1