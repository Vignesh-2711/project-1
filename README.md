Student Management System
A backend API built with Node.js, Express.js, and MongoDB for managing students, courses, enrollments, and attendance.

🚀 Live Demo
🔗 Project URL: Student Management System on Render

📌 Features
✅ Student Management – Create, read, update, and delete student records
✅ Course Management – Add and manage courses
✅ Enrollment System – Enroll students in courses
✅ Attendance Tracking – Maintain attendance records
✅ Authentication – Basic authentication for secure access

⚙️ Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Hosting: Render
API Testing: Postman
📂 Project Structure

/project-1
│── /model          # Mongoose schemas (Student, Course, Enrollment, Attendance)
│── /controller     # API logic for handling CRUD operations
│── /routes         # Express routes for API endpoints
│── /config         # Database connection and environment settings
│── server.js       # Main entry point of the application
│── package.json    # Dependencies and scripts
│── README.md       # Project documentation

🔧 Installation & Setup
Follow these steps to set up the project locally:

1️⃣ Clone the Repository

git clone https://github.com/Vignesh-2711/project-1.git
cd project-1
2️⃣ Install Dependencies

npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_atlas_url
PORT=5000
4️⃣ Run the Application
Start the server:
npm start
The API will run at http://localhost:5000

📌 API Endpoints
🔹 Student APIs
Method	Endpoint	Description
GET	/api/students	Get all students
GET	/api/student/:id	Get a single student
POST	/api/student	Add a new student
PUT	/api/student	Update student details
DELETE	/api/student/:id	Delete a student
🔹 Course APIs
Method	Endpoint	Description
GET	/api/courses	Get all courses
GET	/api/course/:id	Get a single course
POST	/api/course	Add a new course
PUT	/api/course	Update course details
DELETE	/api/course/:id	Delete a course
🔹 Enrollment APIs
Method	Endpoint	Description
GET	/api/enrollments	Get all enrollments
POST	/api/enrollment	Enroll a student in a course
DELETE	/api/enrollment/:student_id/:course_id	Remove enrollment
🔹 Attendance APIs
Method	Endpoint	Description
GET	/api/attendances	Get all attendance records
POST	/api/attendance	Mark attendance
🔒 Authentication
The API includes basic authentication for secure access.
Future improvements: JWT-based authentication and role-based access control (RBAC).
🛠 Future Enhancements
📌 Implement role-based access control (RBAC)
📌 Add frontend integration
📌 Improve API documentation with Swagger
📌 Optimize database queries for better performance

👨‍💻 Author
Vignesh Rao Y
📧 Email: [Your Email]
🔗 LinkedIn: linkedin.com/in/vigneshrao27
🔗 GitHub: github.com/Vignesh-2711

⭐ Contribution & Support
🔹 Feel free to fork this repo and contribute!
🔹 If you find this project useful, star this repository ⭐