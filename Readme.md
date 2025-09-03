# DietGen - Diet and Nutrition Management App

A full-stack web application for diet and nutrition management with user authentication and meal tracking features.

## Features

- User authentication (signup/login)
- Protected routes
- Dashboard for authenticated users
- Meal tracking
- Nutritionist directory
- Modern UI with Tailwind CSS

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd DietGen
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in the backend directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dietgen-db
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:5000

2. Start the frontend development server
```bash
cd frontend
npm run dev
```
The frontend will run on http://localhost:5173

### Available Scripts

#### Backend
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

#### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## API Endpoints

### Authentication
- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login user
- `GET /home` - Protected route (requires authentication)

## Project Structure

```
DietGen/
├── backend/
│   ├── dbms/
│   │   ├── db.js
│   │   └── models/
│   │       └── users.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Home/
│   │   │   ├── Meals/
│   │   │   ├── Navbar/
│   │   │   ├── Nutritionists/
│   │   │   ├── SideMenu/
│   │   │   ├── Track/
│   │   │   └── Updates/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the ISC License.
