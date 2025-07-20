# Angular TODO App 📝

A simple yet fully functional TODO list application built with **Angular** and styled with **Angular Material**.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Modular architecture using Angular components and services
- Clean and responsive UI using Angular Material components

## Project Structure

<pre><code>```
src/
└── app/
    ├── components/
    │   ├── task-form/     # Input form to add tasks
    │   ├── task-list/     # List of current tasks
    │   └── task-item/     # Single task with checkbox & delete
    ├── models/
    │   └── tarea.model.ts # Tarea interface definition
    ├── services/
    │   └── task.service.ts # Task service (optional logic)
    └── app.module.ts      # Main module configuration
```
</code></pre>


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/angular-todo-app.git
cd angular-todo-app

npm install

npm start

Open your browser at: http://localhost:4200

Technologies Used
	•	Angular CLI
	•	Angular Material
	•	TypeScript

📂 Notes
	•	This app is built for an Angular exam, demonstrating component communication, UI framework usage, and modular code organization.
	•	The app uses @Output event emitters for interaction between components (task-form, task-list, and task-item).

⸻

Author

Joel Mercado
Proudly built in Mexico — with Angular and coffee

Example:

<img width="1360" height="528" alt="image" src="https://github.com/user-attachments/assets/b6312cf7-0a9a-4783-99b3-0b0807e933ec" />

