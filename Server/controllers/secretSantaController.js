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

        await transporter.verify();

        await Promise.all(
        names.map(async (element) => {
            const mailOptions = {
                from: process.env.GMAIL_USER,
                to: `${element.to}`,
                subject: "Secret Santa",
                text: `'Ετυχες τον/την ${element.name} μην το πεις σε κανέναν . \nΚαλά δώρα;).`
            };
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
        }));
        res.status(200);
    }
    catch (err) {
        console.error('Error sending email:', err);
    }
}