const transporter = require("../config/email");

exports.secretSanta = async (req, res) => {
    try {
        const emails = req.body;
        console.log(emails);

        const names = [];
        const emailsNames = [];

        emails.forEach(element => {
            const emailName = element.split(":");
            names.push({name: emailName[1], to: ""});
            emailsNames.push({email: emailName[0], name: emailName[1], taken: false}); 
        });

        names.forEach(r => {
            while(true){
                const index = Math.floor(Math.random() * names.length);
                const all = emailsNames[index];
                if(r.name != all.name && all.taken != true){
                    all.taken = true;
                    r.to = all.email;
                    break;
                }
            }
        });

        console.log(names);
        
        res.status(200);
    }
    catch (err) {
        console.error('Error sending email:', err);
        res.status(500).json({ status: 'error', message: 'Error sending email, please try again.' });
    }
}