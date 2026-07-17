🔐 MERN Authentication System (Login & Signup)

A full-stack authentication system built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This project provides secure user registration, login, and protected authentication using modern web development practices.

🚀 Features

- ✅ User Registration (Sign Up)
- ✅ User Login
- ✅ Password Hashing with bcrypt
- ✅ JWT (JSON Web Token) Authentication
- ✅ Protected Routes
- ✅ Form Validation
- ✅ MongoDB Database Integration
- ✅ Responsive User Interface
- ✅ Error Handling
- ✅ Logout Functionality

🛠️ Tech Stack

Frontend

- React.js
- React Router DOM
- Axios
- CSS / Tailwind CSS (if used)

Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

📂 Project Structure

project-root/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
└── README.md

⚙️ Installation

Clone the repository

git clone https://github.com/your-username/your-repository.git

Install Backend Dependencies

cd server
npm install

Install Frontend Dependencies

cd ../client
npm install

🔑 Environment Variables

Create a ".env" file inside the "server" folder.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ Run the Project

Start Backend

cd server
npm start

Start Frontend

cd client
npm start

The application will run on:

- Frontend: "http://localhost:3000"
- Backend: "http://localhost:5000"

📡 API Endpoints

Method| Endpoint| Description
POST| /api/auth/signup| Register a new user
POST| /api/auth/login| Login user
GET| /api/auth/profile| Protected user profile

🔒 Security

- Passwords are encrypted using bcrypt.
- JWT is used for secure authentication.
- Environment variables protect sensitive credentials.
- Protected routes prevent unauthorized access.

📸 Screenshots

Add screenshots of:

- Login Page
- Signup Page
- Dashboard
- MongoDB Database

🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Vivek Maurya

If you found this project helpful, don't forget to ⭐ the repository and follow for more MERN Stack projects.
