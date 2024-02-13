let username;

// username = window.prompt('What is your username: ')

// console.log(username);

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value
    document.getElementById("myHeading").textContent = `hello ${username}`
    console.log(username)
}