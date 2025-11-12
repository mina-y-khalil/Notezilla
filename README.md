# 📝 Notezilla

<p align="center">
  <img src="https://redeem-innovations.com/wp-content/uploads/2025/11/Notezilla2.png" alt="Notezilla Project Cover" />
</p>

**Notezilla** is a sleek and minimalist note-taking app built with
**React** and **Material-UI**, inspired by Google Keep.
It allows users to create, view, and delete notes instantly --- with
smooth animations and a clean, responsive design.

---

## 🚀 Features

- ✨ Create notes with a title and content
- 🧭 Expandable note input using smooth **Zoom** animation
- 🗑️ Delete notes instantly with a single click
- 🎨 Custom background and MUI-styled floating action button
- 💾 Dynamic state management with React Hooks (`useState`)
- 💡 Component-based architecture: `Header`, `Footer`, `Note`, and
  `CreateArea`

---

## 🧩 Tech Stack

Category Technology

---

Frontend React 18, JavaScript (ES6+)
UI Library Material-UI (`@mui/material`, `@mui/icons-material`)
Styling CSS3 (custom design, Google Fonts, responsive layout)
Animation MUI `Zoom` transition

---

## 📂 Project Structure

    Notezilla/
    │
    ├── src/
    │   ├── components/
    │   │   ├── App.jsx
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Note.jsx
    │   │   └── CreateArea.jsx
    │   ├── index.js
    │   └── styles.css
    │
    ├── package.json
    └── README.md

---

## ⚙️ Installation & Setup

1.  **Clone this repository**

    ```bash
    git clone https://github.com/mina-y-khalil/Notezilla.git
    cd Notezilla
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Start the development server**

    ```bash
    npm start
    ```

4.  Open your browser and visit:

        http://localhost:3000

---

## 🧠 How It Works

- The main `App` component maintains an array of all notes.\
- `CreateArea` handles new note input, expansion, and submission using
  controlled components.\
- Notes are displayed via the `Note` component, which also supports
  deletion using a unique `id`.\
- The floating **Add** button (`<Fab>`) triggers note creation with
  MUI icons and transitions.

---

## 🎨 UI Highlights

- Bright yellow header and floating button for visual emphasis\
- Soft off-white background with subtle cube texture\
- Rounded note cards with drop shadows for depth\
- Responsive and modern design --- looks great on desktop or mobile

---

## 🧰 Dependencies

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/icons-material": "^7.3.5",
  "@mui/material": "^7.3.5",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1"
}
```

---

## 🌐 Connect with Me

Let’s connect and share ideas!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mina%20Y.%20Khalil-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/mina-y-khalil/)
