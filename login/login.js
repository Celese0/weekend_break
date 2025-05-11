var user = localStorage.getItem("current_user");

if (user){
    window.location.href = "user_dashboard.html"
}



var username = "user";
var password = "password";

var user_details = {
    username: username,
    password: password
}

localStorage.setItem("current_user", JSON.stringify(user_details))

function validate() {
    var input_username = document.getElementById("username").value;
    var input_password = document.getElementById("password").value;

    
    if(input_username == username && input_password == password) {

        user_details.username = input_username
        user_details.password = input_password
        localStorage.setItem("current_user", JSON.stringify(user_details));
        window.location.href = "user_dashboard.html"
        return false;
    } 
    else {
        alert("Details were incorrect. Ps. the username is user and the password is password");
    }

}