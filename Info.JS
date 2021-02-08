//import { readFileSync } from "fs";
//var text = readFileSync("Account_Info.txt");
//var textByLine = text.split("\n")

//var objAccount = [
//{   
   // username="",
    //password=""
//}
//]

function NewInfo();{  //takes the username and password they type, and as of now just prints it to the console
    Var; username = document.getElementById("username").value
    Var; password = document.getElementById("password").value
    console.log("Username: " + username + "password:" + password)
}
function getuserpass(username, password){ //should search the text document for the usernames and passwords honestly might not even need this, Function Info may just do the job
    var names = read("Account_Info.txt").split("\n"); 
    for (var i = 0; i < names.length; ++i) {
              names[i] = names[i].trim();
           }
    for (var i = 0; i < names.length; ++i){ 
    var accounts = names[i].split(" "); 
    var username = account[0];
    var password = [1];
}}

function Info() { //checks to make sure the credentials are correct, right now just prints it to the console
    fetch('Account_Info.txt')
    //.then(response => response.text())
    //.then(text => console.log(text))
    Var; username = document.getElementById("username").value
    Var; password = document.getElementById("password").value

    for(i = 0; i < objAccount.length; i++) {
        if (username == objAccount[i].username && password == objAccount[i].
            password) {
            console.log(username + " is logged in")
            return
        }
    }
    console.log("Username or Password is incorrect")
}
