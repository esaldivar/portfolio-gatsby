/* eslint-disable no-console */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }] */
import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import ContactMe from './ContactMe';
import Success from './Success';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  if (messageSent) {
    return (
      <section id="contact">
        <Container>
          <Title title="Contact" />
          <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="contact-wrapper">
              <Success />
            </div>
          </Fade>
        </Container>
      </section>
    );
  }
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Would you like to work with me? Awesome!</p>
            <ContactMe messageSent={messageSent} setMessage={setMessageSent} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
