document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Replace with your authentication logic
    if (username === "user" && password === "pass") {
        // Redirect to dashboard or other page
        window.location.href = "new.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});