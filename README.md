# CampusConnect 🚀

A full-stack MERN social networking platform built for students and developers to connect, share knowledge, showcase skills, and collaborate with peers.

CampusConnect provides a professional developer profile system, social posting, interactions, and community features in one platform.

---

## 🌐 Live Demo

Frontend:
https://campus-connect-xi-peach.vercel.app

Backend:
https://campusconnect-1tha.onrender.com

---


## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based authentication
- Protected routes
- Role-based protected routes
- Persistent login using JWT tokens
- Secure password encryption using bcrypt

### 👤 Developer Profiles
- Create and update professional profiles
- Upload profile avatar using Cloudinary
- Add:
  - Bio
  - Skills
  - Company
  - Location
  - GitHub username
  - Social media links

### 🎓 Education & Experience
- Add multiple education records
- Add multiple work experiences
- Manage profile credentials

### 📝 Social Feed
- Create posts
- Like and dislike posts
- Comment on posts
- Delete own posts and comments
- View developer community posts

### 📱 Responsive Design

- Fully responsive UI for desktop, tablet, and mobile devices
- Responsive navigation
- Mobile-friendly profile and dashboard layouts
- Responsive posts and comments
- Responsive authentication and profile forms

### 🖼️ Media
- Cloudinary image storage
- Profile image management

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux
- React Router
- Tailwind CSS
- Axios
- Lucide React
- React Icons

### Backend
- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Database
- MongoDB
- Mongoose

### Cloud Services
- Cloudinary

### Tools
- Git
- GitHub
- Postman

---

## 🚀 Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- MongoDB Atlas

Storage:
- Cloudinary

---

## 📂 Project Structure

```
CampusConnect
│
├── client              # React frontend
│
├── config              # Database and Cloudinary configuration
│
├── middleware          # Authentication and upload middleware
│
├── models              # MongoDB schemas
│
├── routes              # Backend API routes
│
└── server.js           # Express server entry point
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Virus-0000/CampusConnect.git

cd CampusConnect
```

---

## Backend Setup

Install dependencies:

```bash
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_url

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

PORT=5001
```

Run backend:

```bash
npm start
```

---

## Frontend Setup

Move to client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

---

## 🔌 API Features

### Authentication

```
POST /api/users
POST /api/auth
GET  /api/auth
```

### Profile

```
GET    /api/profile
POST   /api/profile
PUT    /api/profile/education
PUT    /api/profile/experience
POST   /api/profile/avatar
```

### Posts

```
GET    /api/posts
POST   /api/posts
PUT    /api/posts/like/:id
PUT    /api/posts/dislike/:id
POST   /api/posts/comment/:id
```

---

## 🚀 Future Improvements

- Real-time chat using Socket.io
- Notifications
- College-specific communities
- Advanced search
- File sharing

---

## 🎯 Project Goal

CampusConnect aims to provide a professional networking platform for students and developers where users can showcase their skills, share knowledge, and build connections.

---

## 👨‍💻 Author

**Divyanshu Raj**

B.Tech Information Technology

GitHub: [Virus-0000](https://github.com/Virus-0000)