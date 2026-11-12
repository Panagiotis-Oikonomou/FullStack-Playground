const transporter = require("../config/email");

exports.secretSanta = async (req, res) => {
    try {
        const emails = req.body;
        console.log(emails);

        const names = [];
        const emailsNames = [];

        emails.forEach(element => {
            const emailName = element.split(":");
            names.push(emailName[1]);
            emailsNames.push({email: emailName[0], name: emailName[1]}); 
        });
        
        res.status(200).json({ status: 'success', message: 'Email sent successfully' });
    }
    catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ status: 'error', message: 'Error sending email, please try again.' });
    }
}