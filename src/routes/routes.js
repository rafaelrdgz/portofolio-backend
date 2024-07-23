import { Router } from "express";
import transporter from "../email/emailTransporter.js";
import { config } from "dotenv";

const router = Router();
config();

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: name + ' has contacted you ' + email,
        text: message,
    };
    transporter.set("oauth2_provision_cb", (user, renew, callback) => {
        let accessToken = userTokens[user];
        if (!accessToken) {
          return callback(new Error("Unknown user"));
        } else {
          return callback(null, accessToken);
        }
      });
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('There was an error sending the email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

export default router;