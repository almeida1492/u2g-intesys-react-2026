# 📘 Frontend Development Glossary

## 🟢 Node (Node.js)

**Node.js** is a JavaScript runtime that allows you to run JavaScript
**outside the browser**, usually on your computer or on a server.

In this course, Node is used to:

- Run development tools
- Install dependencies
- Execute build processes
- Run the development server

👉 Important: Node is _not_ a framework. It is an environment for
executing JavaScript.

---

## 📦 npm (Node Package Manager)

**npm** is the package manager that comes with Node.js.

It allows you to:

- Install libraries (like React)
- Manage project dependencies
- Run scripts defined in `package.json`

Example:

```bash
npm install react
npm run dev
```

Think of npm as the system that manages external code your project
depends on.

---

## ⚛ React

**React** is a JavaScript library for building user interfaces.

It allows you to:

- Build UI using components
- Manage state
- Create dynamic and interactive applications
- Write declarative UI code

React focuses on the **view layer** of an application.

---

## 🎯 React Event Handlers

React event handlers are functions that respond to user interactions
such as:

- Clicks
- Form submissions
- Input changes
- Keyboard events

Example:

```tsx
<button onClick={handleClick}>Click me</button>
```

They follow a declarative pattern and use camelCase naming (e.g.,
`onClick`, `onChange`).

---

## 🪝 React Hooks

Hooks are special functions that allow functional components to use
React features.

### useState

`useState` allows a component to store and update state.

Example:

```tsx
const [count, setCount] = useState(0);
```

Updating state triggers a re-render.

### useEffect

`useEffect` allows you to perform side effects such as:

- Data fetching
- Subscriptions
- Manual DOM interactions

Example:

```tsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

The dependency array controls when the effect runs.

---

## ⚡ Vite

**Vite** is a modern frontend build tool and development server.

It:

- Starts a local development server
- Bundles your application for production
- Optimizes assets
- Transpiles TypeScript and modern JavaScript

Vite is a tool that helps you build and serve your project efficiently.

---

## 🌐 SPA (Single Page Application)

A **Single Page Application (SPA)** is a web application that loads a
single HTML page and dynamically updates content without reloading the
page.

Instead of navigating between multiple HTML files, the application:

- Changes the UI dynamically
- Uses JavaScript to update the DOM
- Uses browser history APIs for navigation

React applications are typically SPAs.

---

## 🧭 Browser Routing (React Router)

Browser routing allows a Single Page Application to display different
views based on the URL.

**React Router** is a library that enables routing in React
applications.

It allows you to:

- Define routes
- Navigate between pages
- Use URL parameters
- Create nested layouts

Example concept:

```tsx
<Route path="/projects/:id" element={<ProjectPage />} />
```

Routing happens on the client side without full page reloads.

---

## 🌐 HTML (HyperText Markup Language)

HTML defines the **structure** of a web page.

It describes:

- Headings
- Paragraphs
- Buttons
- Forms
- Layout containers

HTML gives structure, but no behavior.

---

## 🎨 CSS (Cascading Style Sheets)

CSS defines the **visual appearance** of a web page.

It controls:

- Colors
- Layout
- Spacing
- Typography
- Responsiveness

HTML is structure.\
CSS is presentation.

---

## 🟡 JavaScript

JavaScript is the programming language of the web.

It allows you to:

- Add interactivity
- Manipulate the DOM
- Fetch data from APIs
- Implement application logic

React is written in JavaScript and runs on top of it.

---

# 🧠 Mental Model Summary

- **HTML** → Structure\
- **CSS** → Style\
- **JavaScript** → Behavior\
- **React** → Structured UI logic\
- **React Hooks** → State & lifecycle logic in functional components\
- **SPA** → One page, dynamic updates\
- **React Router** → Client-side navigation\
- **Node** → JavaScript runtime outside the browser\
- **npm** → Dependency manager\
- **Vite** → Development & build tool
