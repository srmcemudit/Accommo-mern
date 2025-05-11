# Accommo-MERN 🏠

**Accommo-MERN** is a full-featured PG/hostel management system built with the MERN (MongoDB, Express, React, Node.js) stack. It provides an admin dashboard to efficiently manage room allocation, guest details, payments, complaints, and suggestions.

## 🚀 Features

### Admin Panel
- **Portal Overview**: View summary of all rooms (Occupied, Vacant, Under Maintenance)
- **Room Management**: Assign rooms, view guest details, update room status
- **Payment Management**: Track pending and completed payments
- **Complaint Box**: Manage guest complaints
- **Suggestions Box**: View guest suggestions and feedback

### Authentication
- JWT-based authentication with role-based login system
- Protected routes with access control

### State Management
- Redux Toolkit for global state
- Persisted authentication and room state using `redux-persist`

## 🛠 Tech Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & role-based authorization
- **State Management**: Redux Toolkit + redux-persist

## 📁 Folder Structure
      accommo-mern/
      ├── client/                  # React frontend
      │   ├── public/              # Static assets
      │   └── src/                 # Source files
      │       ├── components/      # Reusable UI components
      │       ├── features/        # Redux slices
      │       ├── pages/           # React pages
      │       ├── redux/           # Store and reducers
      │       └── App.js           # Main application component
      │
      ├── server/                  # Express backend
      │   ├── controllers/         # Route handlers
      │   ├── middleware/          # Auth and error handling middleware
      │   ├── models/              # Mongoose models
      │   ├── routes/              # API routes
      │   ├── utils/              # Utility functions
      │   └── index.js           # Entry point
      │
      └── README.md  

## ⚙️ Installation

### Prerequisites
- Node.js
- MongoDB

### Clone the repository

    git clone https://github.com/srmcemudit/accommo-mern.git
    cd accommo-mern

## 🔧 Backend Setup

    cd server
    npm install

### Create a .env file in the server folder and add:
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

### Start the backend server:
    npm run dev

## 🎨 Frontend Setup

    cd client
    npm install
    npm run dev

## 📌 Future Enhancements
  - Email alerts for payments or complaints
  - Search and filter for guests/room
  - Guest profile pages

## 📸 Screenshots

  ![Screenshot 2025-05-11 184339](https://github.com/user-attachments/assets/164395e5-38a3-47b6-b679-11e81ea672f2)
  ![Screenshot 2025-05-11 184641](https://github.com/user-attachments/assets/3d0d4715-ca4e-4c24-8387-84d0ef1e2909)
  ![Screenshot 2025-05-11 185058](https://github.com/user-attachments/assets/f5abe60e-0b8d-4e6c-bdc2-a41a7dcf5aa5)
  ![Screenshot 2025-05-11 185309](https://github.com/user-attachments/assets/9d64a84e-5ccd-4c33-b7f0-ea8060c34ada)


## 👨‍💻 Author
  - Udit Tiwari — https://github.com/srmcemudit
