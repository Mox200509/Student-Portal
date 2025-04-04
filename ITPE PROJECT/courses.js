// Sample course data
const courses = [
    {
        id: 1,
        title: "Web Development",
        description: "Learn how to build websites and web applications from scratch.",
        instructor: "Jane Smith",
    },
    {
        id: 2,
        title: "Introduction to JavaScript",
        description: "An introductory course on JavaScript programming language.",
        instructor: "John Doe",
    },
    {
        id: 3,
        title: "Database Management",
        description: "Learn about relational databases and SQL.",
        instructor: "Emily Davis",
    },
    {
        id: 4,
        title: "Data Structures and Algorithms",
        description: "Understand the fundamental data structures and algorithms.",
        instructor: "Michael Brown",
    },
    {
        id: 5,
        title: "Machine Learning",
        description: "Learn the basics of machine learning and artificial intelligence.",
        instructor: "Sarah Wilson",
    },
];

// Function to display all courses in the catalog
function displayCourses(courseList) {
    const coursesContainer = document.getElementById("courses-list");
    coursesContainer.innerHTML = ""; // Clear existing courses

    courseList.forEach(course => {
        const courseElement = document.createElement("div");
        courseElement.classList.add("course-item");

        courseElement.innerHTML = `
            <h2>${course.title}</h2>
            <p><strong>Instructor:</strong> ${course.instructor}</p>
            <p>${course.description}</p>
            <a href="course-details.html?id=${course.id}" class="view-details">View Details</a>
        `;

        coursesContainer.appendChild(courseElement);
    });
}

// Function to filter courses based on search input
function filterCourses() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchQuery) ||
        course.description.toLowerCase().includes(searchQuery) ||
        course.instructor.toLowerCase().includes(searchQuery)
    );

    displayCourses(filteredCourses);
}

// Initial load: display all courses
window.onload = function() {
    displayCourses(courses);
};
