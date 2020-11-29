import "./database/connection";  // Uses our connection with the db
import routes from "./routes";  // Gets our routes
import path from "path";  // Used to handle directories paths
import "express-async-errors";  // Since express can't handle errors in async functions, we need to use a pack for it
import errorHandler from "./errors/handler";
import cors from "cors";  // Used to allow the API to be accessed from multiple addresses

const express = require('express');  // Library that allows us to better work with req/res

const app = express();  // Creates an app

app.use(cors());
app.use(express.json());  // Tells our app that we are going to use JSON
app.use(routes);  // Tells our app to use our defined routes
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// tells our app to get info from localhost 8000
app.listen(8000);
