import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [buttonText, setButtonText] = useState('Send');

  const formUpdate = (setFunc, value) => {
    setFunc(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sent");
   
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={firstName} placeholder="First Name" onChange={(e) => formUpdate(setFirstName, e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => formUpdate(setLastName, e.target.value)} />
                  </Col>

                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={email} placeholder="Email Address" onChange={(e) => formUpdate(setEmail, e.target.value)} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => formUpdate(setPhone, e.target.value)} />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" value={message} placeholder="Message" onChange={(e) => formUpdate(setMessage, e.target.value)}></textarea>
                    <button type="submit">{buttonText}</button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

