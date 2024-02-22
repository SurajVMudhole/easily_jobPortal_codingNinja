//import libraries here
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
//------------------------------------------------------------------------------
//import costom file
import HomeController from "./src/controller/home.controller.js";
//------------------------------------------------------------------------------
//set server here
const server = express();
const port = 3200;
//------------------------------------------------------------------------------
//set View Engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
//------------------------------------------------------------------------------
//create Instance for controller
const homeController = new HomeController();
//------------------------------------------------------------------------------
//set Middleware configs
server.use(ejsLayouts);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static("src/views"));
server.use(express.static("public"));
//------------------------------------------------------------------------------
//set path router starts here
server.get("/", homeController.getHomePage);
server.get("/jobs", homeController.getJobsPage);

//set path router Ends here
//------------------------------------------------------------------------------
//start server here
server.listen(port, (err) => {
  if (err) console.log(`Error in starting server: ${err}`);
  else console.log(`Server started on port ${port}`);
});
//------------------------------------------------------------------------------
