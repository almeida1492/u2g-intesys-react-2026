# 📘 Frontend Development Glossary

## 🟢 Node (Node.js)

**Node.js** is a JavaScript runtime that allows you to run JavaScript
**outside the browser**, usually on your computer or on a server.

In this course, Node is used to:

-   Run development tools
-   Install dependencies
-   Execute build processes
-   Run the development server

👉 Important: Node is *not* a framework. It is an environment for
executing JavaScript.

------------------------------------------------------------------------

## 📦 npm (Node Package Manager)

**npm** is the package manager that comes with Node.js.

It allows you to:

-   Install libraries (like React)
-   Manage project dependencies
-   Run scripts defined in `package.json`

Example:

``` bash
npm install react
npm run dev
```

Think of npm as the system that manages external code your project
depends on.

------------------------------------------------------------------------

## ⚛ React

**React** is a JavaScript library for building user interfaces.

It allows you to:

-   Build UI using components
-   Manage state
-   Create dynamic and interactive applications
-   Write declarative UI code

React does not:

-   Handle backend logic
-   Replace HTML/CSS
-   Automatically structure your entire app

It focuses on the **view layer** of an application.

------------------------------------------------------------------------

## ⚡ Vite

**Vite** is a modern frontend build tool and development server.

It:

-   Starts a local development server
-   Bundles your application for production
-   Optimizes assets
-   Transpiles TypeScript and modern JavaScript

Vite is not a framework.\
It is a tool that helps you build and serve your project efficiently.

------------------------------------------------------------------------

## 🌐 HTML (HyperText Markup Language)

HTML defines the **structure** of a web page.

It describes:

-   Headings
-   Paragraphs
-   Buttons
-   Forms
-   Layout containers

Example:

``` html
<button>Click me</button>
```

HTML gives structure, but no behavior.

------------------------------------------------------------------------

## 🎨 CSS (Cascading Style Sheets)

CSS defines the **visual appearance** of a web page.

It controls:

-   Colors
-   Layout
-   Spacing
-   Typography
-   Responsiveness

Example:

``` css
button {
  background-color: blue;
}
```

HTML is structure.\
CSS is presentation.

------------------------------------------------------------------------

## 🟡 JavaScript

JavaScript is the programming language of the web.

It allows you to:

-   Add interactivity
-   Manipulate the DOM
-   Fetch data from APIs
-   Implement application logic

React is written in JavaScript and runs on top of it.

------------------------------------------------------------------------

# 🧠 Mental Model Summary

-   **HTML** → Structure\
-   **CSS** → Style\
-   **JavaScript** → Behavior\
-   **React** → Structured UI logic\
-   **Node** → JavaScript runtime outside the browser\
-   **npm** → Dependency manager\
-   **Vite** → Development & build tool
