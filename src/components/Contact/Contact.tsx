import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:jrsagaroo7@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:jrsagaroo7@gmail.com">jrsagaroo7@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919795464849">
            <img src={phoneIcon} alt="Phone Number" />
          </a>
          <a href="tel:+919795464849">(+91) 9795464849</a>
        </div>
      </div>
      <Form />
    </Container>
  );
}
