import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayavvyv");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
}
const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <form action="https://formspree.io/f/mayavvyv" method="POST">
          <label>
            Your email:
            <input type="email" name="_replyto" />
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <h1>Contact Component</h1>
      </Container>
    </section>
  );
};

export default Contact;
