// Check if the user is logged in by checking sessionStorage
window.onload = function() {
    const loggedIn = sessionStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        // Redirect to the login page if the user is not logged in
        window.location.href = "login.html";
    }

    // Handle the logout logic
    document.getElementById("logout-link").addEventListener("click", function(event) {
        event.preventDefault();
        // Clear the session storage
        sessionStorage.removeItem("loggedIn");

        // Redirect to the login page
        window.location.href = "login.html";
    });
};
