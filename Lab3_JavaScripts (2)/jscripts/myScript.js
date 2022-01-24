//alert("Hello, you are welcome to view my page");

function UpdateData()
{
    var name = prompt("Enter name: ");
    var age = prompt("Enter age: ");
    var height = prompt("Enter height in feet: ")
    height = height * 30.48;
    var titleDetails = "Some info on " + name;

    document.getElementById('theTitle').innerHTML = titleDetails;
    document.getElementById('theName').innerHTML = name;
    document.getElementById('theAge').innerHTML = age;
    document.getElementById('theHeight').innerHTML = (height).toFixed(2);
}