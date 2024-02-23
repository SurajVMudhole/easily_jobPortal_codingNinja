import nodemailer from "nodemailer";

export default class NotificationMail {
  static async sendJobConfirmationMail(companyObj, applicantObj) {
    // CREATE A EMAIL TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });
    // CONFIGURE EMAIL CONTENT
    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: applicantObj.email,
      subject: `Easily Update | Application Status: Successfull`,
      text: `Dear ${applicantObj.name}
     This email is to inform you that your job application for ${companyObj.companyName} has been received and will be forwrded to the company we will keep you posted about your candidature.
     Meanwhile, test your preparation level and problem solving skills under pressure by practicing as much as possible
     Please feel free to reach us for any further queries 
     Best Regards 
     Easily`,
    };
    // SEND THE EMAIL
    try {
      const result = await transporter.sendMail(mailOptions);
      console.log("Email has been sent successfuly");
    } catch (err) {
      console.log(err);
      console.log("Email could not sent due to above issue");
    }
  }
}
