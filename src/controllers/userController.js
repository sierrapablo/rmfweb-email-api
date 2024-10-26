const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Handles sending email based on provided form data.
 * @param {Request} req - Express request object containing form data in req.body
 * @param {Response} res - Express response object
 */
const sendEmail = async (req, res) => {
    const { email, subject, text } = req.body;

    const msg = {
        to: process.env.EMAIL_RECEIVER,
        from: process.env.EMAIL_SENDER,
        subject: subject,
        text: text,
        html: `<p>${text}</p>`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
};

module.exports = {
    sendEmail
};
