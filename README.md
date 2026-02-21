# TeamBoard -- React Course Project

## 📚 About This Project

**TeamBoard** is a simplified project management application built for
educational purposes as part of a 20-hour React course.

The goal of this repository is not just to build a working application,
but to:

- Understand how a modern React application is structured
- Learn how tooling works under the hood
- Build a realistic, production-oriented frontend
- Practice collaboration and Git workflows
- Develop real-world engineering habits

This is **not** a tutorial-style copy/paste project.\
Everything will be built **from scratch**, including the project
configuration.

We will not use `vite create` or similar scaffolding commands. Instead,
we will manually configure:

- Vite
- React 19
- TypeScript
- CSS Modules
- Project structure
- Routing
- State management
- API integration

The objective is to make students capable of creating and structuring a
real project independently.

---

## 🛠 Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules
- React Router (for routing)
- Fetch API (or equivalent) for HTTP requests

---

## 🎯 Learning Objectives

By the end of the course, students should be able to:

- Set up a React + TypeScript project from scratch
- Structure a scalable frontend application
- Build reusable components
- Handle routing and layouts
- Manage client state and server state
- Implement forms with validation
- Integrate with an API
- Organize code using feature-based architecture
- Think in terms of production-readiness

---

# 📦 Application Scope

TeamBoard is a simplified Kanban-style project management tool.

It consists of 7 main activities (pages), each mapped to a specific
route.

---

## 🔐 1. Login Page

**Route:** `/login`

- User enters:
  - Username
  - Password
- User can:
  - Log in
  - Navigate to the Register page

---

## 📝 2. Register Page

**Route:** `/register`

- User fills in registration form
- Form submission creates a new user

---

## 📁 3. Projects Overview

**Route:** `/projects`

This page introduces the **main application layout**.

### Layout (Persistent in all authenticated pages)

- Header (App logo, possibly user info)
- Sidebar:
  - "Projects overview" (default)
  - List of projects (buttons to open each Kanban board)
  - Navigation to Settings

### Specific Content Area

- Grid of project cards
- Each card displays:
  - Title
  - Description
  - Created by
  - Number of cards
  - Relevant metadata

---

## ⚙️ 4. Settings

**Route:** `/settings`

Same layout as Projects.

Specific area contains three form sections:

1.  Personal Data
2.  User Data
3.  Password

The user can update their data in the database.

---

## 📋 5. KanBan Board

**Route:** `/projects/:projectId`

Same layout.

Specific area displays:

- Columns
- Cards inside columns
- Card movement between columns
- Card creation and editing

---

## ✏️ 6. Edit/Create Project

**Route:**\

- `/projects/new` - `/projects/:projectId/edit`

Form for:

- Creating a new project
- Editing an existing project

---

## 🗂 7. Edit/Create Card

**Route:**\

- `/projects/:projectId/cards/new` -
  `/projects/:projectId/cards/:cardId/edit`

Form for:

- Creating a card
- Editing a card

---

# 🧱 Data Models

## User

```ts
User {
  id: number
  name: string
  surname: string
  email: string
  username: string
  password: string
}
```

## Card

```ts
Card {
  id: number
  title: string
  description: string
  assignedTo: User
}
```

## Column

```ts
Column {
  id: number
  title: string
  cards: Card[]
  position: number
}
```

## Project

```ts
Project {
  id: number
  title: string
  description: string
  members: User[]
  columns: Column[]
  createdBy: User
  createdAt: string
  updatedAt: string
}
```

---

# 🌿 Git Workflow Rules (Mandatory)

To simulate a professional team workflow, we will follow strict Git
rules.

## Branching Policy

- The `main` branch is the reference branch.
- **Each student must create their own branch from `main`.**

Example:

```bash
git checkout main
git pull
git checkout -b your-name
```

### Important Rules

- ❌ Do NOT push directly to `main`
- ❌ Do NOT merge other students' branches
- ✅ Push changes only to your own branch
- ✅ Use `main` for consultation and comparison during homework
- ✅ Keep your branch updated with `main` when instructed

The `main` branch will contain:

- The instructor's reference implementation
- Stable checkpoints

Your branch is your working environment.

---

# 🏗 Project Structure Philosophy

We are building everything from scratch to understand:

- What each configuration file does
- How bundlers work
- How TypeScript integrates with React
- How CSS Modules are compiled
- How routing works internally

You are expected to:

- Understand each configuration file
- Avoid blindly copying code
- Ask why things work the way they do

---

# 🧪 Educational Constraints

This project:

- Is not focused on design perfection
- Is not focused on backend complexity
- Is focused on:
  - Architecture
  - Code quality
  - Scalability
  - Clean components
  - Clear separation of concerns

You are encouraged to:

- Refactor
- Improve naming
- Remove duplication
- Question architectural decisions

---

# 🚀 Final Goal

At the end of the course, you should be able to:

- Start a React project from zero
- Structure a medium-sized application
- Build and deploy it
- Understand what happens behind the scenes

If you can do that, you are no longer "learning React".

You are engineering with it.
