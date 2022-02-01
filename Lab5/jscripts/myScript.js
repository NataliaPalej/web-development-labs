//alert("Hello, you are welcome to view my page");

function UpdateData()
{
    var name = prompt("Enter your name: ");
    var age = prompt("Enter your age: ");
    var address1 = prompt("Enter your address (1): ")
    var address2 = prompt("Enter your address (2): ")
    var country = prompt("Enter your country: ")

    document.getElementById('theName').innerHTML = name;
    document.getElementById('theAge').innerHTML = age;
    document.getElementById('theAddress1').innerHTML = address1;
    document.getElementById('theAddress2').innerHTML = address2;
    document.getElementById('theCountry').innerHTML = country;
}