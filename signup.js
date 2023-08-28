document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Basic validation: Check if fields are not empty
    if (fullName.trim() === "" || email.trim() === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    // Basic email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    
    // Password length validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    // Replace this with actual user registration logic or API call
    alert("Registration successful!");
});