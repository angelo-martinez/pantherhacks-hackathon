var objAccount = [
{   
    username="Medical",
    password="User"
},
{
    usernam="Maker",
    password="User",
    info='hello'
}
]


function Info() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objAccount.length; i++) {
        if (username == objAccount[i].username && password == objAccount[i].
            password) {
            console.log(username + " is logged in")
            return
        }
    }
    console.log("Username or Password is incorrect")
}
