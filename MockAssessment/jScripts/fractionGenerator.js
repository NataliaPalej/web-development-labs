//These are my global variables
var a=0, b=0, c=0, d=0, num=0, denum=0, add=0, sub=0, mult=0, div=0; 

 function $ (id){
	return document.getElementById(id);
};

ResetTextFields = function(){
	$("num").value = " ";
	$("denum").value = " ";
	$("a").innerHTML = " ";
	$("b").innerHTML = " ";
	$("c").innerHTML = " ";
	$("d").innerHTML = " ";
	$("FeedBack").innerHTML = " ";
	$("resultPara").innerHTML = "When entering your answer please make sure to enter integer values only";
};

GenerateQuestion = function(){
	ResetTextFields();
	a = Math.floor(Math.random() * 10) + 1;
	b = Math.floor(Math.random() * 10) + 1;
	c = Math.floor(Math.random() * 10)+ 1;
	d = Math.floor(Math.random() * 10) + 1;
	console.log("a: " + a + "\nb: " + b + "\nc: " + c + "\nd: " + d);
	$("a").innerHTML = a;
	$("b").innerHTML = b;
	$("c").innerHTML = c;
	$("d").innerHTML = d;
};

checkOperation = function(){
	if ($("operation").value == "add")
	{
		console.log("Add selected");
		return 1;
	}
	if ($("operation").value =="sub")
	{
		console.log("Substraction selected");
		return 2;
	}
	if ($("operation").value == "div")
	{
		console.log("Division selected");
		return 3;
	}
	if ($("operation").value =="mult")	
	{
		console.log("Multiplication selected");
		return 4;
	}
};

calculate = function(){
	var num = parseInt($("num").value);
	var denum = parseInt($("denum").value);
	var denumRes = 0;
	var numRes = 0;

	if(isNaN(num) || isNaN(denum) || num < 1 || denum < 1)
	{
		alert("Only numerical values allowed and number must be greater than 1.")
		console.log("Error");
	}
	else{
	var operation = checkOperation();
	
	if (operation == 1)
	{
		numRes = (a*d)+(b*c);
		denumRes = b*d;
		console.log("Result: " + numRes + "/" + denumRes);
		console.log("Operation addition");
	}
	if(operation == 2)
	{
		numRes = (a*d)-(b*c);
		denumRes = b*d;
		console.log("Result: " + numRes + "/" + denumRes);
		console.log("Operation substration");
	}
	if(operation == 3)
	{
		numRes = a*d;
		denumRes = b*c;
		console.log("Result: " + numRes + "/" + denumRes);
		console.log("Operation division");
	}
	if(operation == 4)
	{
		numRes = a*c;
		denumRes = b*d;
		console.log("Result: " + numRes + "/" + denumRes);
		console.log("Operation multiplication");
	}

	var places = parseInt($("places").value);
	if(isNaN(places))
	{
		alert("Please set the number of decimal places");
	}
	else
	{
		//print result with selected decimal places
		var result = (numRes/denumRes).toFixed(places);
	}

	if(num==numRes && denum == denumRes)
	{
		$("FeedBack").innerHTML = "<span style= 'color: green'>Correct!</span>";
		$("resultPara").innerHTML = "<p>Congratulations, you got this one right.</p><table><tr><td>" + numRes + "<hr></td><td rowspan = '2'>=</td><td rowspan = '2'>" + result + "</td></tr><tr><td>" + denumRes + "</td></tr></table><p>Try another one!</p>";
		console.log("Correct answer");
	}
	else
	{
		$("FeedBack").innerHTML = "<span style= 'color: red'>Incorrect!</span>";
		$("resultPara").innerHTML = "<p>Hard luck! The correct answer is: </p><table><tr><td>" + numRes + "<hr></td><td rowspan = '2'>=</td><td rowspan = '2'>" + result + "</td></tr><tr><td>" + denumRes + "</td></tr></table><p>Don't give up and try again!</p>";
		console.log("Incorrect answer");
	}
}
};

window.onload = function(){
	$("calc").onclick = function(){calculate();}
	$("reset").onclick = function(){GenerateQuestion();}
};