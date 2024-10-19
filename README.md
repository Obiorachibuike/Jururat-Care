# Jururat Care

## Project Overview

Jururat Care is a simple RESTful API built with Node.js and Express.js, designed to manage a list of healthcare services. It connects to a MongoDB database to store service information and provides endpoints for creating, reading, updating, and deleting services.

## Features

- **Add a New Service**: Add a healthcare service with a name, description, and price.
- **Get All Services**: Retrieve a list of all available healthcare services.
- **Update a Service**: Modify the details of an existing service.
- **Delete a Service**: Remove a service from the list.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing service data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **body-parser**: Middleware for parsing incoming request bodies.

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or cloud instance)

## Dependencies

To install the necessary dependencies for this project, run the following command:

```bash
npm install express mongoose dotenv body-parser

Getting Started

Follow these steps to set up and run the Jururat Care project:

1. Clone the Repository

Clone the project repository to your local machine:

git clone https://github.com/yourusername/jururat-care.git
cd jururat-care

2. Install Dependencies

Navigate to the project directory and install the required dependencies:

npm install

3. Set Up Environment Variables

Create a .env file in the root directory of your project and add your MongoDB connection string and optional port:

MONGO_URI=your_mongodb_connection_string
PORT=5000

4. Connect to MongoDB

Ensure that your MongoDB instance is running and accessible from your application.

5. Start the Server

To start the server, use the following command:

npm start

You should see a message indicating that the server is running:

Server running on port 5000

6. API Endpoints

Here are the available API endpoints for managing healthcare services:

POST /api/services: Add a new service.

Request Body:

{
  "name": "Service Name",
  "description": "Service Description",
  "price": 100
}


GET /api/services: Get all services.

PUT /api/services/:id: Update a service by ID.

Request Body:

{
  "name": "Updated Service Name",
  "description": "Updated Description",
  "price": 150
}


DELETE /api/services/:id: Delete a service by ID.


Testing the API

You can test the API endpoints using tools like Postman or Insomnia.

Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request.

License

This project is licensed under the MIT License.

Acknowledgments

Inspired by various RESTful API implementations and best practices.

### Instructions to Customize

- Replace `yourusername` in the clone URL with your GitHub username or the actual repository link.
- If you have any specific details or additional instructions for your project, feel free to modify or add to the content.

### Saving the `README.md`

To create this file in your project:

1. Create a new file named `README.md` in the root directory of your project.
2. Copy and paste the above content into that file.
3. Save the changes.

This `README.md` provides a comprehensive overview of the Jururat Care project, including setup instructions, features, and API details. Let me know if you need any more adjustments or assistance!

