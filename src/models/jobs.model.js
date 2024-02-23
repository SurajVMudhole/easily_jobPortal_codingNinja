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
  static getJobById(id) {
    return jobsArray.find((j) => j.id == id);
  }
}

var jobsArray = [
  new JobsModel(
    1,
    "Remote",
    "Backend Developer",
    "New Delhi",
    "Coding Ninjas",
    "6-7 LPA",
    "2023-09-20",
    ["NodeJs", "MySQL", " Javascript", " Axois"],
    5
  ),

  new JobsModel(
    2,
    "Hybrid",
    "Frontend Developer",
    "New York, USA",
    "Google",
    "16-18 LPA",
    "2023-11-23",
    ["HTML", "CSS", " Javascript", "Bootstrap"],
    6
  ),

  new JobsModel(
    3,
    "On-Site",
    "Full-Stack Developer",
    " Banglore",
    "Zomato",
    "4-6 LPA",
    "2023-10-2",
    ["NodeJs", "Javascript", "Docker"],
    1
  ),
];
