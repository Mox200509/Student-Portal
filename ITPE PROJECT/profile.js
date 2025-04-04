// Elements
const editProfileBtn = document.getElementById("edit-profile-btn");
const editForm = document.getElementById("edit-form");
const cancelEditBtn = document.getElementById("cancel-edit-btn");
const editProfileForm = document.getElementById("edit-profile-form");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profileCourse = document.getElementById("profile-course");

// Show the edit profile form when the "Edit Profile" button is clicked
editProfileBtn.addEventListener("click", function() {
    // Display the edit form
    editForm.style.display = "block";

    // Hide the profile details
    document.querySelector(".profile-details").style.display = "none";

    // Fill the edit form with the current profile values
    document.getElementById("edit-name").value = profileName.textContent;
    document.getElementById("edit-email").value = profileEmail.textContent;
    document.getElementById("edit-course").value = profileCourse.textContent;

    // Hide the edit button
    editProfileBtn.style.display = "none";
});

// Handle cancel button click to revert changes and hide the edit form
cancelEditBtn.addEventListener("click", function() {
    // Hide the edit form and show the profile details again
    editForm.style.display = "none";
    document.querySelector(".profile-details").style.display = "block";
    editProfileBtn.style.display = "inline-block";
});

// Handle form submission to save profile changes
editProfileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get new values from the edit form
    const newName = document.getElementById("edit-name").value;
    const newEmail = document.getElementById("edit-email").value;
    const newCourse = document.getElementById("edit-course").value;

    // Update profile details on the page
    profileName.textContent = newName;
    profileEmail.textContent = newEmail;
    profileCourse.textContent = newCourse;

    // Hide the edit form and show the updated profile
    editForm.style.display = "none";
    document.querySelector(".profile-details").style.display = "block";
    editProfileBtn.style.display = "inline-block";

    alert("Profile updated successfully!");
});
