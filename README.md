# ClassBoxes Technologies — Modern Website Concept

A modern, responsive, full-stack website concept for **ClassBoxes Technologies**, focused on technology recruitment, talent acquisition, career opportunities, and skills development.

> **Project context:** This concept was developed during my SDE internship at ClassBoxes Technologies. After joining the company, I was asked to study the existing company website and create a more modern version. I used the existing website and its business focus as a reference, then built a refreshed user experience with separate frontend and backend applications.
>
> **Important:** This repository is an independent redesign and development concept. It is not presented as the official production website of ClassBoxes Technologies.

## Live Demo

- **Website:** https://classboxes-technologies-dummy-1.onrender.com/
- **GitHub repository:** https://github.com/VikasKumar281/ClassBoxes-Technologies-dummy-

## Project Overview

The website is designed around two primary audiences:

- **Candidates and professionals** who want to explore career opportunities, share their profile, and request a skills review.
- **Employers and hiring teams** who want to describe open roles, connect with suitable talent, and submit recruitment inquiries.

The concept brings these journeys together through dedicated pages, responsive navigation, reusable React components, interactive sections, and backend-powered forms.

## Features

### Home page

- Recruitment-focused hero section with clear calls to action.
- Separate journeys for hiring teams and job seekers.
- Interactive skill-area selector for **Cloud & Delivery**, **Application Engineering**, and **Data & Quality**.
- Recruitment process overview.
- Client/brand presentation section.
- Office information and links to recruitment-related articles.
- Newsletter subscription form.

### About us

A dedicated page introducing the company concept and its recruitment and career-development positioning.

### Find a job

A candidate-focused page that explains the job-seeker journey and provides a way to share a profile, preferred work, and career interests.

### Find talent

An employer-focused page describing the talent-request process, shortlist approach, engagement options, and a form for sharing hiring requirements.

### Test your skills

A skills-review information page outlining a four-step journey:

1. Register and share your skills.
2. Take a practical review.
3. Receive feedback.
4. Choose a suitable next step.

The page also describes the review around practical building, checking/testing, and explaining technical decisions.

### Contact us

A contact page with office information and an inquiry form.

### Search and navigation

- Responsive header with dropdown navigation.
- Mobile navigation menu.
- Search overlay and a dedicated search route.
- Search content maintained separately in the client data modules.
- Shared footer and not-found route.

### Interaction and visual experience

- Page loader/transition component.
- Scroll-reveal behavior for page sections.
- Floating message widget.
- Interactive forms with loading, success, and error feedback.
- Responsive page layouts and custom styling.
- Reduced-motion preference handling for section reveal behavior.

### Backend functionality

The active Express API provides:

- API health check: `GET /api/health`
- Newsletter subscriptions: `POST /api/subscribe`
- General, hiring, candidate, and skills-review inquiries: `POST /api/inquiries`
- Website messages: `POST /api/messages`

The API validates incoming data and stores records using Mongoose models.

## Technology Stack

### Frontend

| Technology | Usage |
|---|---|
| React 19 | Component-based user interface |
| Vite | Development server and production build tooling |
| React Router | Client-side page routing |
| Bootstrap 5 | Responsive layout and styling utilities |
| Bootstrap Icons | Interface icons |
| Framer Motion | Animation library included in frontend dependencies |
| CSS | Custom styling, responsive layouts, and visual effects |

### Backend

| Technology | Usage |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API |
| MongoDB | Data storage |
| Mongoose | MongoDB object modeling |
| CORS | Cross-origin request handling |
| dotenv | Environment variable configuration |
| mongodb-memory-server | Local in-memory MongoDB fallback when no database URI is configured and local MongoDB is unavailable |

## Repository Structure

```text
ClassBoxes-Technologies-dummy-/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── modern.css
│   │   ├── inner.css
│   │   ├── api.js
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   └── Subscriber.js
│   ├── routes/
│   │   └── subscribe.js
│   ├── src/
│   │   ├── db.js
│   │   ├── index.js
│   │   └── models.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

The backend scripts in `server/package.json` start `server/src/index.js`.

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/about-us` | About the company |
| `/find-a-job` | Candidate and job-seeker journey |
| `/find-talent` | Employer and talent-request journey |
| `/test-your-skills` | Skills-review information |
| `/contact-us` | Contact details and inquiry form |
| `/search` | Search page |
| `*` | Not-found page |

## Getting Started

### Prerequisites

Install:

- Node.js and npm
- MongoDB for persistent local development (optional if using the in-memory fallback)

Use a Node.js release supported by the Vite version specified in `client/package.json`.

### 1. Clone the repository

```bash
git clone https://github.com/VikasKumar281/ClassBoxes-Technologies-dummy-.git
cd ClassBoxes-Technologies-dummy-
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Configure the frontend

For local development, the Vite development server proxies `/api` requests to `http://localhost:5000`, so `VITE_API_URL` can normally be left unset.

When the frontend uses a separately hosted backend, create `client/.env` and set:

```env
VITE_API_URL=http://localhost:5000
```

Replace the value with the deployed API URL when deploying.

### 4. Start the frontend

From the `client` directory:

```bash
npm run dev
```

Vite prints the local development URL in the terminal (commonly `http://localhost:5173`).

### 5. Install backend dependencies

Open a second terminal from the repository root:

```bash
cd server
npm install
```

### 6. Configure backend environment variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/classboxes
CLIENT_URL=http://localhost:5173
```

- `PORT` sets the API port.
- `MONGODB_URI` (or `MONGO_URI`) sets the MongoDB connection string.
- `CLIENT_URL` can contain comma-separated frontend origins allowed by the backend CORS configuration.

If no MongoDB URI is configured, the backend first attempts to connect to local MongoDB. If that is unavailable, it starts an in-memory MongoDB instance. Data stored in the in-memory database is temporary and is not suitable for production persistence.

### 7. Start the backend

From the `server` directory:

```bash
npm run dev
```

The API starts on the configured port when the database connection succeeds. With the example configuration, the base URL is `http://localhost:5000`.

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Returns API health status |
| `POST` | `/api/subscribe` | Saves a newsletter email subscription |
| `POST` | `/api/inquiries` | Saves a contact, hiring, candidate, or skills-review inquiry |
| `POST` | `/api/messages` | Saves a website message |

### Example: newsletter subscription

```json
{
  "email": "person@example.com"
}
```

### Example: website message

```json
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "message": "I would like to know more about your services."
}
```

### Example: inquiry

```json
{
  "source": "contact-us",
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "phone": "+1-555-0100",
  "company": "Example Company",
  "subject": "Hiring inquiry",
  "role": "Frontend Developer",
  "technologies": "React, JavaScript",
  "openings": "2",
  "experience": "3-5 years",
  "workAuth": "",
  "message": "We are looking for frontend developers.",
  "consent": true,
  "privacy": true
}
```

The inquiry endpoint validates the name, email, message, and required consent/privacy fields before saving the inquiry. Some optional fields are used by the different inquiry forms; the example shows the broader payload shape accepted by the API.

## Available Scripts

### Frontend (`client`)

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Generate the production frontend build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Backend (`server`)

| Command | Description |
|---|---|
| `npm run dev` | Start the API with Node watch mode |
| `npm start` | Start the API |

## Deployment Notes

The frontend and backend are separate applications and can be deployed independently.

1. Deploy the `client` directory as a Vite/React application.
2. Deploy the `server` directory as a Node.js web service.
3. Set `VITE_API_URL` in the frontend environment to the deployed backend API URL.
4. Set `PORT`, `MONGODB_URI` (or `MONGO_URI`), and `CLIENT_URL` in the backend environment.
5. Add the deployed frontend origin to `CLIENT_URL` so the backend CORS policy accepts requests from it.
6. Use a persistent MongoDB database in production. The in-memory fallback is intended for local development and does not retain data across process restarts.

## Development Approach

The project was approached as a website redesign exercise:

1. Reviewed the existing ClassBoxes website to understand its recruitment, talent, and career-development focus.
2. Planned clearer journeys for candidates and hiring teams.
3. Built the frontend using reusable React components and page-level routes.
4. Added responsive navigation, search, page transitions, and scroll-based section reveals.
5. Implemented an Express API for inquiries, messages, newsletter subscriptions, and health checks.
6. Connected the frontend forms to the backend and used MongoDB models to persist submitted data.

## Project Scope

This repository contains a website redesign concept and its supporting backend API. Pages explain recruitment and skills-review journeys, and forms submit information to the API. A live job-board feed, candidate-matching engine, employer dashboard, authentication system, and full online assessment engine are **not** described as completed features here.

## Acknowledgements

Developed as an independent website redesign concept during my SDE internship at **ClassBoxes Technologies**, inspired by the company's existing website and business domain.

## Author

**Vikas Kumar**

- GitHub: [VikasKumar281](https://github.com/VikasKumar281)
- LinkedIn: [Vikas Kumar](https://www.linkedin.com/in/vikaskumar-fullstack/)

---

*This is a portfolio and development concept. Company names, logos, and referenced brand assets belong to their respective owners.*
