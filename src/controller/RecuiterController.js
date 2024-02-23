import JobsModel from "../models/jobs.model.js";
import ApplicantRecord from "../models/applyjob.model.js";
export default class RecuiterController {
    postRegister(req, res) {
        const registerObj = req.body;

        return res.status(201).redirect("/");
    }
}