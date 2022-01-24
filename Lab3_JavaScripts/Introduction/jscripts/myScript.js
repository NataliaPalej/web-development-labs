function load()
{
    var name = document.getElementById('theName').innerHTML;
    alert("Contents of h1 is " + name);
    var userEntry = prompt("What would you like to change the heading to?", "Enter text here");
    document.getElementById('theContent').innerHTML = user.Entry;
}