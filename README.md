# Todo List App

A simple and interactive Todo List application built with React.js. This app allows users to add new tasks, mark tasks as complete, and delete tasks.

## Features

*   **Add Todos**: Easily add new tasks to your list.
*   **Mark as Complete**: Toggle the completion status of tasks.
*   **Delete Todos**: Remove tasks you no longer need.
*   **Responsive Design**: Basic styling for a clean user experience.

## Technologies Used

*   React.js
*   HTML5
*   CSS3

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

*   [Node.js](https://nodejs.org/)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/todolist-app.git
    cd todolist-app
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Application

To start the development server and view the app in your browser:

```bash
npm start
```

This will open the application in your default web browser at `http://localhost:3000`.

## Project Structure

```
todolist-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoForm.js
│   │   ├── TodoItem.js
│   │   └── TodoList.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
├── README.md
└── ... (other config files)
```

## Usage

1.  **Add a new todo**: Type your task into the input field and click the "Add Todo" button.
2.  **Mark as complete**: Click the checkbox next to a todo item to toggle its completion status. Completed items will have a strikethrough.
3.  **Delete a todo**: Click the "Delete" button next to a todo item to remove it from the list.
