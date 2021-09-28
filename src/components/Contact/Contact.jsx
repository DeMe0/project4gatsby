import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";
import "../../styles/contact.sass";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayavvyv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
}
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us!</h2>
      <Container>
        <form action="https://formspree.io/f/mayavvyv" method="POST">
          <label>
            Your email:
            <input type="email" name="_replyto" />
          </label>
          <label>
            Your phone number:
            <input type="tel" name="_replyto" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit" className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Submit</span>
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
