## Features

Here are some of the project highlights:

*   Full Stack MERN Application (MongoDB Express.js React Node.js)
*   Secure user authentication and authorization using JSON Web Tokens (JWT)
*   User account creation and management (Deposit Withdraw and Transfer)
*   Admin dashboard for managing user account requests and bank account statuses
*   Responsive design using tailwind.css for compatibility with a range of devices
*   Efficient and intuitive user interface for ease of use

## Setting Up API URL On Frontend

please make sure to add the following lines in your .env file (in project root folder) or you will get an error after production deploy:

```
MONGO_URI= your Mongodb URI
JWT_SECRET=your JWT secret
CORS_DOMAINS = http://localhost:3000
```

## Running the project
* After downloading / cloning the project repository open up a terminal from the project root.
* Run ```npm i``` in the project root.
* Run ```cd frontend``` and then run ```npm i``` again.
* From the project root run ```npm run both``` to start both the frontend and backend servers.