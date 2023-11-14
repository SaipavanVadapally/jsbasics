document.getElementById("register-link").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("forgot-form").style.display = "none";
});

document.getElementById("forgot-link").addEventListener("click", function() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("forgot-form").style.display = "block";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "test@example.com" && password === "password") {
        document.getElementById("login-success").style.display = "block";
        document.getElementById("login-error").style.display = "none";
    } else {
        document.getElementById("login-error").style.display = "block";
        document.getElementById("login-success").style.display = "none";
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newEmail = document.getElementById("new-email").value;
    var newPassword = document.getElementById("new-password").value;
    if (newEmail && newPassword) {
        document.getElementById("register-success").style.display = "block";
        document.getElementById("register-error").style.display = "none";
        setTimeout(function() {
            window.location.href = "#login-form";
        }, 3000);
    } else {
        document.getElementById("register-error").style.display = "block";
        document.getElementById("register-success").style.display = "none";
    }
});

document.getElementById("forgot-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var forgotEmail = document.getElementById("forgot-email").value;
    if (forgotEmail) {
        document.getElementById("forgot-success").style.display = "block";
        document.getElementById("forgot-error").style.display = "none";
        setTimeout(function() {
            window.location.href = "#login-form";
        }, 3000);
    } else {
        document.getElementById("forgot-error").style.display = "block";
        document.getElementById("forgot-success").style.display = "none";
    }
});
