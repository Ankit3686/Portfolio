function Contact() {

    const sendMail = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        const mailSubject = encodeURIComponent(subject || "Portfolio Contact");

        const mailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href = `mailto:ankit22102001kumar@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    };

    return (
        <section id="contact">
            <h2 className="section-title">Contact Me</h2>

            <div className="contact-container">

                {/* LEFT */}
                <div className="contact-info">
                    <h3>Let’s Build Something Together</h3>
                    <p>Have a project or opportunity? Let’s talk.</p>

                    <div className="info-box">📧 ankit22102001kumar@gmail.com</div>
                    <div className="info-box">📱 +91 8219965803</div>

                    <div className="social-links">
                        <a href="https://github.com/Ankit3686" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={sendMail} className="contact-form">

                    <div className="input-group">
                        <input type="text" name="name" required />
                        <label>Your Name</label>
                    </div>

                    <div className="input-group">
                        <input type="email" name="email" required />
                        <label>Your Email</label>
                    </div>

                    <div className="input-group">
                        <input type="text" name="subject" />
                        <label>Subject</label>
                    </div>

                    <div className="input-group">
                        <textarea name="message" required></textarea>
                        <label>Your Message</label>
                    </div>

                    <button type="submit" className="btn-premium">
                        Send Message 
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Contact;