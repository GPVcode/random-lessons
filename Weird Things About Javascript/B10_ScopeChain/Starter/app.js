// function b() {
	//myVar searches for var outside of current environment where var does not exist. The outer environment in this case is the global execution context, therefore the out put is the value of variable myVar in the global execution context which is 1
	// 	console.log(myVar);
	// }

function a() {
	//  2 is returned because a is outer environment of b and myVar in function a equals 2
	function b() {
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();


// scope chain is the link of the outer environment references