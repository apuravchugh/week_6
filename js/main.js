//js file
(function() {
	console. log("js file loaded") ;

	//vars
	var num1 = document.querySelector("#input1");
	var num2 = document.querySelector("#input2");
	var equals = document.queryselector("#trigger");
	var outcome = document.queryselector("#value");
	//console.log(num1);
	//console.log(num2);
	//console.log(equals);
	//console.log(outcome);

	



	//functions
	function addStuff(){
		//console. log("from addStuff");

	}






	//listner
	equals.addEvenListner("click", addStuff, false);

}) ();