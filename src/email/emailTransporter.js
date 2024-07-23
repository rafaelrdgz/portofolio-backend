import nodemailer from "nodemailer";
import { config } from "dotenv";


config()

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD
  },
 });

export default transporter