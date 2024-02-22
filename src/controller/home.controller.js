import JobsModel from "../models/jobs.model.js";

export default class HomeController {
  getHomePage(req, res) {
    return res.status(200).render("home");
  }
  getJobsPage(req, res) {
    const jobs = JobsModel.getJobs();
    console.log(jobs);
    return res.status(200).render("jobs", { jobs: jobs });
  }
}
