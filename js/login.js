document.getElementById("login-submit").addEventListener('click', function () {
     // get user-email
     const emailField = document.getElementById("user-email");
     const userEmail = emailField.value;


     // get user-passoward
     const passwordField = document.getElementById("user-passoward");
     userPassword = passwordField.value;

     // check user email and pass
     if (userEmail == "sontan@bap.com" && userPassword == "sontan") {
          window.location.href = "bank.html";
     }


})