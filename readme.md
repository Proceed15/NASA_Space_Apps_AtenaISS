# Atena - ISS Legacy Explorer 🛰️

## Project Overview

**Atena** is an interactive and immersive web application designed to celebrate the 25th-anniversary legacy of the International Space Station (ISS). It serves as a digital museum, bringing the history, science, and breathtaking views of the ISS to users through a modern, dynamic, and engaging interface built with React.

This project was developed for the NASA Space Apps Challenge.



---

## Features

The application is built as a single-page application with a variety of interactive modules:

* **Integrated Hero Section:** A stunning hero section that combines a dynamic media carousel (featuring official NASA images and videos) with an overlaid navigation menu for a modern, seamless experience.
* **Real-Time ISS Tracking:** An interactive map that displays the current latitude and longitude of the ISS, fetching live data from the Open Notify API.
* **Themed Content Sections:**
    * **Spacewalks (EVAs):** A vertical carousel showcasing historic spacewalks with mixed media content.
    * **Assembly:** A section detailing the construction of the station.
    * **Cupola View:** A horizontal carousel featuring spectacular images taken from the ISS's Cupola module.
* **Interactive Media:** Custom video players that allow users to play and pause mission videos, plus dynamic background video sections for an immersive feel.
* **Modular Architecture:** Built with reusable and maintainable React components for each distinct feature.

---

## Technology Stack

The project leverages a modern web development stack to deliver a rich user experience.

* **Frontend:**
    * **React:** A JavaScript library for building user interfaces.
    * **Vite:** A next-generation frontend tooling for a fast development experience.
    * **JavaScript (ES6+):** Core programming language.
    * **CSS-in-JS & CSS Files:** For component styling.

* **Backend:**
    * **Node.js:** A JavaScript runtime for the server.
    * **Express.js:** A minimal and flexible Node.js web application framework.
    * **CORS:** For enabling cross-origin requests.

* **Database:**
    * **MySQL / MariaDB:** Managed locally via **XAMPP**.

* **APIs:**
    * **NASA Images API:** For fetching official images and videos.
    * **Open Notify API:** For real-time ISS location data.

* **Development & Version Control:**
    * **Git & GitHub:** For version control and repository hosting.
    * **VS Code:** As the primary code editor.
    * **npm:** For package management.

---

## Project Setup & Installation

To run this project locally, you will need to set up both the backend server and the frontend application.

### Prerequisites

* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)
* [XAMPP](https://www.apachefriends.org/index.html) (or another local MySQL/MariaDB server)

### 1. Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Proceed15/NASA_Space_Apps_AtenaISS.git](https://github.com/Proceed15/NASA_Space_Apps_AtenaISS.git)
    cd NASA_Space_Apps_AtenaISS/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the database:**
    * Start the Apache and MySQL modules in your XAMPP control panel.
    * Go to `http://localhost/phpmyadmin`.
    * Create a new database named `iss_legacy_db`.
    * Select the database and go to the "Import" tab.
    * Import the `database/estrutura_banco_mysql.sql` file from this project.

4.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:3001`.

### 2. Frontend Setup

1.  **Navigate to the frontend directory:**
    Open a **new terminal** and navigate to the `frontend` folder.
    ```bash
    cd ../frontend 
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the frontend application:**
    ```bash
    npm start
    ```
    The React application will open in your browser, usually at `http://localhost:5173`.

---

## Use of Artificial Intelligence (AI)

AI was used in a limited capacity as a development assistant and pair-programming partner to accelerate specific tasks, such as debugging, refactoring static code into React components, and generating boilerplate code. All core architectural decisions, features, and the overall project vision were entirely human-driven.
