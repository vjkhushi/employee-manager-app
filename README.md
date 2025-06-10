# Employee Manager App

**Employee Manager App** is a lightweight, user-friendly Employee Management System built with **React.js** and **Tailwind CSS**, using **Local Storage** for data persistence. It allows admins to manage employees and their tasks, while employees can view and update their assigned tasks.

## 🔍 Features

- 🔐 Role-based login (Admin and Employee)
- 🧑‍💼 View employee details and assigned tasks
- ✅ Task status tracking: New, Active, Completed, Failed
- 🧠 LocalStorage for fast and offline-ready experience
- 📱 Fully responsive design with Tailwind CSS

---

## 🚀 Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Data Persistence**: Local Storage

---

## 📦 Folder Structure

```
employee-manager-app/
│
├── public/
├── src/
    ├── assets/
│   ├── components/
│   │   └──Auth/
           └──login.jsx
│   ├── Dashboard/
│   │   └── AdminDashboard.jsx
        └── EmployeeDashboard.jsx
    ├── others/
        └── AllTask.jsx
        └── CreateTask.jsx
        └── Header.jsx
        └── TaskListNumber.jsx
    ├── TaskList/
        └── AcceptedTask.jsx
        └── CompleteTask.jsx
        └── Failed.jsx
        └── NewTask.jsx
        └── TaskList.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils
│   │   └── localStorage.jsx
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── tailwind.config.js
```

---

## 🛠️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/employee-manager-app.git
   cd employee-manager-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Usage**
   - Login as Admin or Employee using credentials from `localStorage.jsx`.
   - Admins can view all users and assign tasks.
   - Employees can see their own tasks with status updates.

---

## 🌐 Login Details (Default)

You can customize your static data in `src/utils/localStorage.jsx`

---

## 📘 How It Works

- On login, user credentials are verified from local JSON.
- Logged-in user info is stored in `localStorage`.
- The dashboard fetches tasks and stats using this local data.
- Changes to task status are also stored back in localStorage.

---

## 🤝 Contributing

Pull requests are welcome. Feel free to fork the repo and submit changes!

---

## ✨ Author

Developed by Khushivijay.

