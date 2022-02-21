/* funcion waits for button to be clicked, then corresponding function is called */
window.onload = function(){
    $("calculate").onclick = function(){calculate();}
    $("reset").onclick = function(){ResetInput();}
}

function $(id){
    return document.getElementById(id);
}

function ResetInput(){
    $("name").value = " ";
    $("cm").value = " ";
    $("inches").value = " ";
    $("feet").value = " ";
    $("result").innerHTML = "Reset button pressed";
    console.log("Reset button was pressed")
}

function calculate(){
    var name = $("name").value;
    console.log("Name: " + name)
    var centymetry = $("cm").value;
    console.log("Height in cm: " + centymetry)

    if(isNaN(centymetry)){
        alert("Numerical values only")
    }
    else{
        var inch = (parseFloat(centymetry)*0.3937).toFixed(2);
        $("inches").value = inch;
        var feet = (parseFloat(centymetry)/30.48).toFixed(2);
        $("feet").value = feet;
        $("result").innerHTML = "Name: " + name + "<br/>Cm: " + centymetry + "<br/>Inches: " + inch + "<br/>Feet: " + feet + "";
        console.log("Inches: " + inch + "\nFeet: " + feet)
    }
}