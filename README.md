# 🧠 Taskly — Task Management Dashboard

**Taskly** is a sleek, responsive task management dashboard built with React, TypeScript, and Tailwind CSS. It allows users to manage tasks efficiently with real-time stats, a modern UI, and intuitive UX patterns like sorting, filtering, modals, and data persistence.

---

## ✨ Features

- ✅ Add / Edit / Delete tasks
- 📊 Dashboard with task summaries, pie chart, and weekly progress graph
- 🎯 My Tasks view with filter, sort, and task cards
- 📅 Due date picker (past dates disabled)
- 🔍 Filter by status & sort by due date
- 💾 Data persisted in LocalStorage
- 🎨 Styled with Tailwind CSS and gradient icon buttons
- 📱 Fully responsive UI (mobile → desktop)

---

## 📸 Screenshots

| Dashboard | My Tasks |
|----------|----------|
| ![Dashboard](./assets/dashboard.png) | ![Tasks](./assets/mytasks.png) |

> *(Replace with your own screenshots if needed)*

---

## 🛠 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 📦 Vite
- 📊 Recharts (for graphs)
- 📁 Context + useReducer
- 🔧 React Hook Form (for validation)
- 🎯 React Icons (Font Awesome)

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Task/         # TaskCard, TaskForm, TaskSummary, TaskFilter
│   └── UI/           # Reusable UI: Button, Input, Modal
├── context/          # TaskContext (global state)
├── pages/            # Dashboard.tsx, MyTasks.tsx
├── reducers/         # taskReducer
├── types/            # Task interfaces
├── utils/            # localStorage, date helpers
└── App.tsx           # Routing setup
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ashitagaur/taskly-dashboard.git
cd taskly-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Then visit: [http://localhost:5173/dashboard](http://localhost:5173/dashboard)

---

## 🕒 Time Taken

> ⏱️ Approximately **3 hours**
> - Hour 1: Setup + Layout + UI skeleton  
> - Hour 2: Task logic + My Tasks CRUD  
> - Hour 3: Dashboard + Stats + Polish

---

## 📌 Future Improvements

- 🔔 Notifications / Reminders
- 🔄 API integration
- 🌓 Dark mode
- ✅ Unit tests (Jest + React Testing Library)
- 🧑‍🤝‍🧑 Multi-user support with auth
