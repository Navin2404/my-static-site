import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
