export default class JobsModel {
  constructor(
    id,
    jobCategory,
    jobDesignation,
    jobLocation,
    companyName,
    salaryRange,
    applyBy,
    skillsRequired,
    numberOfOpenings,
    recruiterEmail
  ) {
    this.id = id;
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salaryRange = salaryRange;
    this.applyBy = applyBy;
    this.skillsRequired = skillsRequired;
    this.numberOfOpenings = numberOfOpenings;
    this.recruiterEmail = recruiterEmail;
  }
  static getJobs() {
    return jobsArray;
  }
}

var jobsArray = [
  new JobsModel(
    1,
    "Remote",
    "Backend Developer",
    "New Delhi",
    "Coding Ninjas",
    "16-17 LPA",
    "2023-12-23",
    "HTML, CSS, Javascript, Tailwind",
    19
  ),

  new JobsModel(
    2,
    "Hybrid",
    "Frontend Developer",
    "New York, USA",
    "Google",
    "16-18 LPA",
    "2023-11-23",
    "HTML, CSS, Javascript, Bootstrap",
    19
  ),

  new JobsModel(
    3,
    "On-Site",
    "Full-Stack Developer",
    "Tokyo, Japan",
    "Microsoft",
    "16-18 LPA",
    "2023-11-23",
    "HTML, CSS, Javascript, Bootstrap",
    19
  ),
];
