const transporter = require("../config/email");

exports.secretSanta = async (req, res) => {
    try {
        const emails = req.body;
        const names = [];
        const emailsNames = [];

        emails.forEach(element => {
            const emailName = element.split(":");
            names.push({ name: emailName[1], to: "" });
            emailsNames.push({ email: emailName[0], name: emailName[1], taken: false });
        });

        names.forEach(r => {
            while (true) {
                const index = Math.floor(Math.random() * names.length);
                const all = emailsNames[index];
                if (r.name != all.name && all.taken != true) {
                    all.taken = true;
                    r.to = all.email;
                    break;
                }
            }
        });

        transporter.verify((error, success) => {
            if (error) {
                console.log("Connection error:", error);
            } else {
                console.log("Server is ready to send emails!");
            }
        });

        names.forEach(async (element) => {
            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: `${element.to}`,
                subject: "Secret Santa",
                text: `'Ετυχες τον/την ${element.name} μην το πεις σε κανέναν γιατί θα το μάθουμε και δεν θες να δεις την κατάληξη αυτού. \nΚαλά δώρα;).`
            };
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
        });
        res.status(200);
    }
    catch (err) {
        console.error('Error sending email:', err);
    }
}