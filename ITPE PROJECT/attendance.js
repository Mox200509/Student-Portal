// Simulating attendance data (in a real application, this would come from a backend server)
const attendanceData = [
    { course: "Web Development", status: "Attended", date: "2025-03-01" },
    { course: "Web Development", status: "Missed", date: "2025-03-05" },
    { course: "Introduction to JavaScript", status: "Attended", date: "2025-03-02" },
    { course: "Database Systems", status: "Excused", date: "2025-03-04" },
    { course: "Operating Systems", status: "Attended", date: "2025-03-03" },
];

// Function to display attendance data in the table
function displayAttendance() {
    const tableBody = document.querySelector("#attendance-table tbody");

    // Clear the table body before inserting new data
    tableBody.innerHTML = "";

    // Loop through each attendance record and create a table row for it
    attendanceData.forEach((record) => {
        const row = document.createElement("tr");

        // Create table cells for course, attendance status, and date
        const courseCell = document.createElement("td");
        courseCell.textContent = record.course;

        const statusCell = document.createElement("td");
        statusCell.textContent = record.status;

        const dateCell = document.createElement("td");
        dateCell.textContent = record.date;

        // Append cells to the row
        row.appendChild(courseCell);
        row.appendChild(statusCell);
        row.appendChild(dateCell);

        // Append row to the table body
        tableBody.appendChild(row);
    });
}

// Call displayAttendance function when the page loads
window.onload = displayAttendance;
