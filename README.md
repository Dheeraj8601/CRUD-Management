# CRUD Application: User Management System

This CRUD application is a User Management System built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user records through a web interface.

## Project Structure:

```plaintext
|-- node_modules
|-- server
|   |-- controller
|   |   |-- controller.js
|   |-- database
|   |   |-- connection.js
|   |-- model
|   |   |-- model.js
|   |-- routes
|   |   |-- router.js
|   |-- services
|       |-- render.js
|-- views
|   |-- include
|   |   |-- _footer.ejs
|   |   |-- _form.ejs
|   |   |-- _header.ejs
|   |   |-- _show.ejs
|   |   |-- indexClient.js
|   |   |-- style.css
|   |-- add_user.ejs
|   |-- index.ejs
|   |-- update_user.ejs
|-- config.env
|-- package-lock.json
|-- package.json
|-- server.js
```


## Technologies Used:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A web application framework for Node.js, providing a robust set of features.
- **MongoDB**: A NoSQL database used for storing user records.
- **EJS**: A template engine for rendering dynamic content in HTML.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: Styling language for designing the user interface.

## Setup:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a MongoDB database and update the `MONGO_URI` in `config.env`.
4. Run the application using `npm start`.
5. Open the application in your browser at `http://localhost:8080`.

## Features:

- **Create User**: Add new users with name, email, gender, and status.
- **Read User**: View a list of all users and details of a specific user.
- **Update User**: Modify user information, including name, email, gender, and status.
- **Delete User**: Remove a user from the system.

## How to Use:

1. Visit the application at `http://localhost:8080`.
2. Navigate to the "New User" page to add a new user.
3. View and manage users on the main page.
4. Click on a user to update or delete their information.
```

