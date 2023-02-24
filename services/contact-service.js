const ContactModel = require("../models/contact")
const nodemailer = require("nodemailer")

class contactService {
    async getAll() {
        let allMessage = await ContactModel.find({})
        return allMessage
    }

    async create(contact, res) {
        if (!contact.email) {
            throw new Error("Email required")
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.SMTP_USER,
            to:  "sevoyan137@gmail.com",
            subject: `Message from ${contact.fullName}, ${contact.email}`,
            text: `TEXT${contact.phoneNumber}`,
            html: `
                    <p>You have na new contact request</p>
                    <h3>Contact Details</h3>
                    <ul>
                        <li>Full Name: ${contact.fullName}</li>
                        <li>Email: ${contact.email}</li>
                        <li>Phone Number: ${contact.phoneNumber}</li>
                    </ul>
                    <h3 style="color:red; margin:0">Message</h3>
                    <p>${contact.message}</p>
                  
                `
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error, "error ka")
                throw new Error("Don't recognize the mail")
            }
        })

        //const result = await transporter
        //    .sendMail(mailOptions)
        //    .then((res) =>console.log(res))
        //    .catch((error) => {
        //        res.send({error})
        //    })
        

        const sendMessage = await ContactModel({...contact})
        await sendMessage.save()
        return sendMessage
        

        

        
    }
}

module.exports = new contactService()