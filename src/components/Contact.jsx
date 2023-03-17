function Contact() {
  return (
    <div className="contact" id="contact-site">
      <div className="contact__content">
        <h3>Welcome to my page</h3>
        <p>Any comments, raise me below!</p>
      </div>
      <div className="contact__email_box">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter your mail..."
            required
          ></input>
          <input type="submit" name="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
