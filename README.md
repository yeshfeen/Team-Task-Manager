# 🚀 Team Task Manager (Full-Stack)

A full-stack web application that allows teams to manage projects, assign tasks, and track progress with role-based access control.

---

## ✨ Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Persistent login using localStorage

### 👥 Role-Based Access

* **Admin**

  * Create projects
  * Create tasks
  * Update task status
* **Member**

  * View assigned tasks
  * Limited access (no creation permissions)

### 📁 Project Management

* Create projects (Admin only)
* View all projects
* Project details with creator info

### ✅ Task Management

* Create tasks
* Update task status:

  * TODO
  * IN_PROGRESS
  * DONE
* View all tasks with project association

### 📊 Dashboard

* Total tasks
* In-progress tasks
* Completed tasks
* Overdue tasks (based on due date)

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB (Mongoose)

**Authentication**

* JSON Web Tokens (JWT)
* bcrypt (password hashing)

**Deployment**

* Railway (Full-stack deployment)

---

## 🏗 Project Structure

```
project-root/
 ├── backend/
 │   ├── models/
 │   ├── routes/
 │   ├── middleware/
 │   ├── server.js
 │   └── build/        # React build (served by backend)
 │
 ├── frontend/
 │   ├── src/
 │   ├── public/
 │   └── build/
```

---

## ⚙️ How It Works

* React frontend is built and served by Express backend.
* All API routes are handled by backend (`/auth`, `/tasks`, `/projects`, `/dashboard`).
* JWT is used to secure protected routes.
* Role-based logic controls access to features.
* Dashboard data is dynamically calculated from task collection.

---

## 🔐 API Endpoints

### Auth

* `POST /auth/signup`
* `POST /auth/login`

### Tasks

* `GET /tasks`
* `POST /tasks`
* `PUT /tasks/:id`

### Projects

* `GET /projects`
* `POST /projects`

### Dashboard

* `GET /dashboard`

---

## 🚀 Deployment (Railway)

This project is fully deployed on Railway with both frontend and backend served from a single server.

### Steps:

1. Build frontend:

   ```
   cd frontend
   npm run build
   ```
2. Copy build folder to backend:

   ```
   frontend/build → backend/build
   ```
3. Configure Express to serve React build
4. Deploy backend on Railway
5. Add environment variables:

   * `MONGO_URI`
   * `JWT_SECRET`

---

## 🔑 Environment Variables

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production
```

---

## 📌 Key Highlights

* Full-stack production-ready application
* Role-based access control (Admin/Member)
* Real-time dashboard analytics
* Secure authentication system
* Single-server deployment (Railway)



## 👨‍💻 Author

Yeshfeen

---

## 💡 Future Improvements

* Task assignment to specific users
* Notifications system
* Improved UI (Tailwind / Material UI)
* Team collaboration features