export default class RecuiterModel {
  constructor(name, email, password) {
    (this.id = recruiters.length + 1),
      (this.name = name),
      (this.email = email),
      (this.password = password);
  }
  static addRecuiter(obj) {
    recruiters.push(obj);
    return true;
  }
  static getRecuiter(email) {
    const recruiter = recruiters.find((r) => r.email === email);
    return recruiter;
  }
}

var recruiters = [];
