function Contact() {
    return (
        <section id="contact" className="contact">
           <div className="section-header">
            <p className="badge">Connect with us</p>
            <h2>Want a custom hair match?</h2>
            <p>Contact us today to schedule your consultation!</p>
           </div>
           <div  className="contact-info">
              </div>
              <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Your Email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Tell us your hair goals..." rows="5" required>
                </textarea>
                <button type="submit" className="button primary">Send Message</button>
              </form>
           </section>
    );
}

export default Contact;