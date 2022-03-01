function $ (id){
	return document.getElementById(id);
};

var ResetTextfields = function(){
	$("width").value="";
	$("length").value="";
	$("height").value="";
	$("radius").value="";
	$("resultPara").innerHTML ="Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains";
};

window.onload = function(){
	//if button calculate is clicked, go to function Calcualte and check which button was pressed
	$("calc").onclick = function(){calculate();}
	$("reset").onclick = function(){ResetTextfields();}
};

var SetFields = function(id){
	if (id == 1)
	{
		console.log("Tank selected")
		$("theImage").src = "images/cube.jpg";
		$("Tank").checked = true;
		$("radius").disabled = true;
		$("radius").value = "";
		$("width").disabled = false;
		$("length").disabled = false;
		$("height").disabled = false;
	}

	if (id == 2)
	{
		console.log("Cylinder selected")
		$("theImage").src = "images/cylinder.jpg";
		$("Cylinder").checked = true;
		$("width").disabled = true;
		$("width").value = "";
		$("length").disabled = true;
		$("length").value = "";
		$("height").disabled = false;
		$("radius").disabled = false;
		$("radius").value = "10";
	}

	if (id == 3)
	{
		//print if selected button works
		console.log("Sphere selected")
		//change image
		$("theImage").src = "images/sphere.jpg";
		$("Sphere").checked = true;
		//diasble or enable appropiate fields
		$("width").disabled = true;
		//set value of disabled fields to show nothing
		$("width").value = "";
		$("length").disabled = true;
		$("length").value = "";
		$("height").disabled = true;
		$("height").value = "";
		$("radius").disabled = false;
		$("radius").value = "10";
	}
};
var calculateTank = function(){
	var result = 0;
	var l = parseFloat($("length").value);
	var w = parseFloat($("width").value);
	var h =parseFloat($("height").value);
	console.log("Length: " + l + "\nWidth: " + w + "\nHeight: " + h);

	if(isNaN(l) || isNaN(w) || isNaN(h))
	{
		alert("Only numerical values are allowed. Try again!");
		console.log("ERROR Only numbers allowed")
	}
	else
	{
		result = (l*w*h).toFixed(2);
		$("resultPara").innerHTML = "The volume of this tank is: " + result + "cm";
	console.log("\tResult: " + result);
	}	

};
var calculateCylinder = function(){
	var h =parseFloat($("height").value);
	var r = parseFloat($("radius").value);
	result = 0;
	console.log("Height: " + h + "\nRadius: " + r);

	if(isNaN(h) || isNaN(r))
	{
		alert("Only numerical values are allowed. Try again!");
		console.log("ERROR Only numbers allowed")
	}
	else
	{
		result = (Math.PI*Math.pow(r, 2)*h).toFixed(2);
		console.log("\tResult: " + result);
		$("resultPara").innerHTML = "The volume of the cylinder is " + result + "cm";
	}
};

var calculateSphere = function(){
	var r = parseFloat($("radius").value);
	var result = 0;
	console.log("Radius: " + r);

	if(isNaN(r))
	{
		alert("Only numerical values are allowed. Try again!");
		console.log("ERROR Only numbers allowed")
	}
	else
	{
		result = ((4/3)*Math.PI*Math.pow(r, 3)).toFixed(2);
		console.log("\tResult: " + result);
		$("resultPara").innerHTML = "The volume of the sphere is " + result + "cm";
	}	
};
function calculate(){
	//if tank is selected, calculate appropiate function
	if ($("Tank").checked == true)
	{
		calculateTank();
	}

	if ($("Cylinder").checked == true)
	{
		calculateCylinder();
	}

	if ($("Sphere").checked == true)
	{
		calculateSphere();
	}
};