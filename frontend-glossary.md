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

## ⏳ Asynchronous Functions & Promises

JavaScript is **single-threaded**, but it can handle asynchronous operations such as:

- Fetching data from an API

- Reading files

- Waiting for timers

An **asynchronous function** allows code to run without blocking the rest of the program.

### Promises

A **Promise** represents a value that will be available in the future.

A Promise can be:

- Pending – still running

- Fulfilled – completed successfully

- Rejected – completed with an error

Example:

```javascript
fetch("/api/projects")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### async / await

`async` and `await` provide a cleaner syntax for working with Promises.

```javascript
async function loadProjects() {
  try {
    const response = await fetch("/api/projects");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

`await` pauses execution inside the async function until the Promise resolves.

---

## 📝 Controlled vs Uncontrolled Forms (React)

Forms allow users to input data. In React, there are two main ways to handle form inputs.

### Controlled Components

A **controlled component** is a form input whose value is controlled by React state.

React becomes the "single source of truth".

Example:

```javascript
const [value, setValue] = useState("");

<input value={value} onChange={(e) => setValue(e.target.value)} />;
```

Characteristics:

- The input value is stored in state

- Every change triggers a re-render

- Easier validation and dynamic behavior

- More predictable data flow

### Uncontrolled Components

An **uncontrolled component** stores its value inside the DOM instead of React state.

You typically use a `ref` to access the value.

Example:

```javascript
const inputRef = useRef < HTMLInputElement > null;

<input ref={inputRef} />;
```

To read the value:

```javascript
const value = inputRef.current?.value;
```

Characteristics:

- The DOM handles the state

- Fewer re-renders

- Simpler for basic forms

- Less direct control over input behavior

### When to Use Each?

- Use **controlled components** when:
  - You need validation

  - You need dynamic UI updates

  - You need tight control over input behavior

- Use **uncontrolled components** when:
  - The form is simple

  - Performance is critical

  - You want minimal state management

---

## 🚀 Optimistic Updates

An **optimistic update** is a UI pattern where the interface updates **immediately** after a user action, before the server confirms the change.

Instead of waiting for the API response:

1. The UI updates instantly.

2. The request is sent to the server.

3. If the request fails, the UI rolls back to the previous state.

This improves perceived performance and user experience.

### Why Use Optimistic Updates?

Without optimistic updates:

- User clicks "Move card"

- UI freezes or shows loading

- Server responds

- UI updates

With optimistic updates:

- User clicks "Move card"

- UI updates immediately

- Server confirms silently in background

---

## 🛑 Error Boundaries in a React SPA

An **Error Boundary** is a React component that catches JavaScript errors in its child component tree during rendering.

Without an error boundary:

- A rendering error can break the entire application.

With an error boundary:

- The error is caught

- A fallback UI is displayed

- The rest of the application continues working

### What Error Boundaries Catch

They catch errors in:

- Rendering

- Lifecycle methods

- Constructors

They do NOT catch errors in:

- Event handlers

- Async code (like `setTimeout`)

- Server-side rendering

### Why They Matter in SPAs

In a Single Page Application:

- Everything runs in one JavaScript context

- A rendering crash can blank the entire UI

Error boundaries:

- Improve resilience

- Allow partial failure

- Enable better UX

- Are essential in production-ready apps

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
