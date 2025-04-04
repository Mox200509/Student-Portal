// Handle login logic
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple username and password check (In a real application, you would authenticate via a backend API)
    if (username === "student" && password === "password123") {
        // Store login status in sessionStorage
        sessionStorage.setItem("loggedIn", "true");

        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password!");
    }
});
