// Sample course data (this will be stored in localStorage in a real-world scenario)
let courses = JSON.parse(localStorage.getItem("courses")) || [
    { id: 1, title: "Web Development", description: "Learn how to build websites and web applications.", instructor: "Jane Smith" },
    { id: 2, title: "Introduction to JavaScript", description: "An introductory course on JavaScript.", instructor: "John Doe" },
];

// Function to display courses in the list
function displayCourses() {
    const coursesContainer = document.getElementById("courses-list");
    coursesContainer.innerHTML = "";  // Clear existing courses

    courses.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course-item");

        courseElement.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p>${course.description}</p>
            <button onclick="deleteCourse(${course.id})">Delete Course</button>
        `;

        coursesContainer.appendChild(courseElement);
    });
}

// Function to add a new course
document.getElementById("add-course-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const title = document.getElementById("course-title").value;
    const description = document.getElementById("course-description").value;
    const instructor = document.getElementById("course-instructor").value;

    const newCourse = {
        id: courses.length + 1,
        title,
        description,
        instructor
    };

    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));  // Save to localStorage

    // Reset the form and refresh the course list
    document.getElementById("add-course-form").reset();
    displayCourses();
});

// Function to delete a course
function deleteCourse(courseId) {
    courses = courses.filter(course => course.id !== courseId);
    localStorage.setItem("courses", JSON.stringify(courses));  // Save updated courses list to localStorage
    displayCourses();  // Refresh the course list
}

// Initial load of the courses
window.onload = function() {
    displayCourses();
};
