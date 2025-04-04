// Simulate a simple user login and registration process for demo purposes
const users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'student1', password: 'password1' },
    { username: 'student2', password: 'password2' },
];

// Handle Login Logic
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the user exists and the password matches
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Save username in localStorage (to simulate a session)
            localStorage.setItem('username', username);
            window.location.href = 'dashboard.html'; // Redirect to the dashboard
        } else {
            // Show error message
            errorMessage.style.display = 'block';
        }
    });
}

// Handle Registration Logic
const registrationForm = document.getElementById('registrationForm');
const registrationError = document.getElementById('registrationError');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if username already exists
        const existingUser = users.find(u => u.username === newUsername);

        if (existingUser) {
            registrationError.textContent = 'Username already exists';
            registrationError.style.display = 'block';
            return;
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            registrationError.textContent = 'Passwords do not match';
            registrationError.style.display = 'block';
            return;
        }

        // If everything is valid, save the new user
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));  // Save updated users array to localStorage

        // Redirect to the login page after registration
        window.location.href = 'login.html';
    });
}

// Display username on dashboard if logged in
const dashboardUsername = document.getElementById('dashboardUsername');
const storedUsername = localStorage.getItem('username');

if (storedUsername && dashboardUsername) {
    dashboardUsername.textContent = storedUsername;
}

