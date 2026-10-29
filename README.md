# goFood

A MERN-stack food ordering application, built as teaching material for a
full-stack workshop with MCA students at Mangalore Institute of Technology and
Engineering (MITE).

The project covers the full path a workshop needs: a React frontend, an Express
API, MongoDB persistence and seeded menu data, kept small enough to build and
explain in a single session.

## Stack

| Layer | Technology | Location |
| --- | --- | --- |
| Frontend | React (Create React App), React Router, Bootstrap | `src` |
| API | Node.js, Express | `backend` |
| Database | MongoDB (Mongoose) | `backend/db` |

## Features

- Menu listing with food items grouped by category
- Item cards rendered from seeded data (`foodData2.json`, `foodCategory.json`)
- Login screen
- REST API serving menu items under `/api`

## Project structure

```text
src/
|-- components/       Card, Navbar, Footer
`-- screens/          Home, Login

backend/
|-- api/items.js      Menu item routes
|-- db/               Mongoose connection, categories, food items
`-- index.js          API entry point, listens on port 5000
```

## Running locally

The frontend and the API run separately. MongoDB must be reachable by the
connection settings in `backend/db/connection.js`.

Start the API:

```bash
cd backend
npm install
npm run serve          # http://localhost:5000
```

Start the React frontend:

```bash
npm install
npm start              # http://localhost:3000
```
