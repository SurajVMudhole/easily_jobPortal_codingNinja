import pkg from "express-validation";
const { body, validationResult } = pkg;
const jobApplyRequest = async (req, res, next) => {
  //step1:setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("phone_number").notEmpty().withMessage("Phone number is required"),
  ];
  //step2:run the rules
  await Promise.all(rules.map((rule) => rule.run(req)));
  //step3:check if there are any errors
  var validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.send({ errormsg: validationErrors.array()[0] });
  } else {
    next();
  }
};

export default jobApplyRequest;
