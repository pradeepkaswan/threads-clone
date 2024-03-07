# Threads Clone

Threads Clone is a full-stack web application built with React, Express.js, and
MongoDB. It allows users to create and participate in discussions by creating
threads and posting comments.

## Features

- User authentication (sign up, login, logout)
- Create new threads
- View and comment on existing threads
- Like threads and comments
- View user profiles
- Search for users and threads
- Responsive design for mobile and desktop

## Technologies Used

- React
- Express.js
- MongoDB
- Mongoose
- JWT

## Getting Started

## Prerequisites

- Node.js (v18.19.1 or higher)
- MongoDB (or a MongoDB Atlas cluster)

## Installation

1. Clone the repository

   ```sh
   git clone https://github.com/pradeepkaswan/threads-clone.git
   ```

2. Install dependencies for the server

   ```sh
    cd threads-clone/server
    npm install
   ```

3. Install dependencies for the client

   ```sh
    cd threads-clone/client
    npm install
   ```

4. Create a `.env` file in the `server` directory and add the following
   environment variables

   ```sh
   MONGODB_URI=<your_mongodb-uri>
   JWT_SECRET=<your_jwt_secret>
   ```

5. Start the development server

```sh
 cd threads-clone/server
 npm run dev

 cd ../client
 npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request
if you have any ideas or suggestions.

## License

Distributed under the MIT License. See `LICENSE` for more information.
