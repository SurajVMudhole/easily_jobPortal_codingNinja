import JobsModel from "../models/jobs.model.js";
import RecuiterModel from "../models/recuiter.model.js";
export default class RecuiterController {
  postRegister(req, res) {
    const registerObj = req.body;
    const rs = RecuiterModel.addRecuiter(req.body);
    if (rs) return res.status(201).redirect("/");
    else return res.status(501).send({ message: "Failed to register " });
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const rs = RecuiterModel.getRecuiter(email);
    req.session.regEmail = email;
    if (rs.password == password) {
      return res.status(200).redirect("/");
    } else {
      return res.status(403).render("404_Error");
    }
  }
  logout(req, res) {
    req.session.destroy();
    res.redirect("/");
  }
  getAddJobPage(req, res) {
    return res.status(200).render("addJob");
  }
}
