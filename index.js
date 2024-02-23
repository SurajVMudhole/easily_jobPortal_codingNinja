//import libraries here
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
//------------------------------------------------------------------------------
//import costom file
import HomeController from "./src/controller/home.controller.js";
import jobApplyRequest from "./src/middleware/applyJob.valllidate.js";
import RecuiterController from "./src/controller/RecuiterController.js";
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
const recuiterController = new RecuiterController();
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
server.get("/jobs/:id", homeController.getJobDetails);
server.post("/applyJob/:id", homeController.postJobApply);
server.post("/register", recuiterController.postRegister);

//set path router Ends here
//------------------------------------------------------------------------------
//start server here
server.listen(port, (err) => {
    if (err) console.log(`Error in starting server: ${err}`);
    else console.log(`Server started on port ${port}`);
});
//------------------------------------------------------------------------------