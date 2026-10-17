# User Authentication System

A full-stack User Authentication System built using **Node.js, Express.js, MongoDB, and JavaScript**. This project allows users to register, log in securely, and access a protected profile using JSON Web Tokens (JWT).

## 🌐 Live Demo

- **Live Website:** https://krisanuuu.github.io/auth-system/
- **GitHub Repository:** https://github.com/krisanuuu/auth-system
- **Backend API:** https://auth-system-api-apft.onrender.com

## ✨ Features

- User registration with username, email, and password
- Secure password hashing using bcrypt
- User login with password verification
- JWT-based authentication
- Protected profile endpoint
- Logout functionality
- MongoDB database integration
- Responsive, styled frontend
- REST API using Express.js

## 🛠️ Technologies Used

**Frontend**
- HTML5
- CSS3
- JavaScript
- Fetch API

**Backend**
- Node.js
- Express.js
- MongoDB and Mongoose
- bcryptjs
- JSON Web Token (jsonwebtoken)
- dotenv
- CORS

**Deployment**
- GitHub Pages — frontend
- Render — backend
- MongoDB Atlas — database

## 📁 Project Structure

```text
auth-system/
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── .gitignore
├── index.html
├── script.js
├── style.css
├── server.js
├── package.json
└── package-lock.json
```

## ⚙️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/krisanuuu/auth-system.git
cd auth-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_secret_key
```

Replace the placeholder values with your own credentials. **Never upload your `.env` file or expose your secrets publicly.**

### 4. Start the server

```bash
node server.js
```

The backend runs locally on port `5000`, provided your server configuration uses that port.

### 5. Open the frontend

Open `index.html` using VS Code Live Server or another local static web server.

Ensure your frontend API URL points to the backend you want to use. For local development, this may be:

```javascript
const API_URL = "http://localhost:5000/api/auth";
```

For the deployed frontend, use the Render backend URL configured in your `script.js`.

## 🔑 API Endpoints

Base URL: `https://auth-system-api-apft.onrender.com/api/auth`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate an existing user |
| GET | `/profile` | Access the authenticated user's profile |

### Authentication

The protected profile endpoint requires a valid JWT in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

The token is returned after a successful login and is used
