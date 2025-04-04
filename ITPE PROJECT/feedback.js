// Feedback Form Submission
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get feedback values
    const rating = document.querySelector('input[name="rating"]:checked');
    const comments = document.getElementById("comments").value;
    const recommend = document.querySelector('input[name="recommend"]:checked');

    // Check if all fields are filled
    if (!rating || !recommend) {
        alert("Please fill out all required fields!");
        return;
    }

    // You can send this data to the server (simulated here)
    const feedbackData = {
        rating: rating.value,
        comments: comments,
        recommend: recommend.value,
    };

    console.log("Feedback Submitted: ", feedbackData);

    // Show Thank You message and hide the form
    document.getElementById("thank-you-message").style.display = "block";
    document.getElementById("feedback-form").reset();
    document.getElementById("feedback-form").style.display = "none";
});
