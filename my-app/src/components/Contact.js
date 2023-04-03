import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/avatar-face1.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    Nom: '',
    Prenom: '',
    email: '',
    tel: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Envoyer');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Envoi en cours...");

    try {
      const templateParams = {
        Nom: formDetails.Nom,
        Prenom: formDetails.Prenom,
        email: formDetails.email,
        tel: formDetails.tel,
        message: formDetails.message
      };

      const response = await emailjs.send('service_k0apzhu', 'template_06pm5jt', templateParams, 'FrXaq4TMKANvCkYLJ');
      setStatus({ success: true, message: 'Votre message a été envoyé avec succès !' });
    } catch (error) {
      setStatus({ success: false, message: 'Oups une erreur est survenue' });
    }

    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Me contacter</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.Nom} placeholder="Nom" onChange={(e) => onFormUpdate('Nom', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.Prenom} placeholder="Prénom" onChange={(e) => onFormUpdate('Prenom', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Adresse mail" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.tel} placeholder="Numéro de téléphone" onChange={(e) => onFormUpdate('tel', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}