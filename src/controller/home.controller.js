import JobsModel from "../models/jobs.model.js";
import ApplicantRecord from "../models/applyjob.model.js";
export default class HomeController {
  getHomePage(req, res) {
    return res.status(200).render("home");
  }
  getJobsPage(req, res) {
    const jobs = JobsModel.getJobs();
    return res.status(200).render("jobs", { jobs: jobs });
  }
  getJobDetails(req, res) {
    const id = req.params.id;
    const job = JobsModel.getJobById(id);
    if (job) {
      return res.status(200).render("jobDetails", { job: job });
    } else {
      return res.status(404).render("404_Error");
    }
  }
  postJobApply(req, res) {
    const applicationObj = req.body;
    const comapnyId = req.params.id;
    const resumeUrl = req.file.filename;
    const result = ApplicantRecord.putApplication(
      comapnyId,
      applicationObj,
      resumeUrl
    );
    if (result) {
      return res.status(201).redirect("/jobs");
    } else {
      return res
        .status(502)
        .send({ status: "Failed to update", message: "Something went wrong" });
    }
  }
}
