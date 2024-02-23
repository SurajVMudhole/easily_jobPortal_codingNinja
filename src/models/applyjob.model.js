import JobsModel from "./jobs.model.js";
import NotificationMail from "../notification/EmailNotification.js";
export default class ApplicantRecord {
  static putApplication(id, applicationObj, resumeUrl) {
    const jobObj = JobsModel.getJobById(id);
    applicantsList.push(...applicationObj, resumeUrl, id);
    NotificationMail.sendJobConfirmationMail(jobObj, applicationObj);
    return true;
  }
}

var applicantsList = [];
