import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/linkedin-logo.svg';
import navIcon2 from '../assets/img/github-logo.svg';
import navIcon3 from '../assets/img/facebook-logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col size={0} sm={0} className="text-center text-sm-end align-center">
            <div className="social-icon1">
            <a href="https://www.linkedin.com/in/aurelien-beton-67b16b1a3/"target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Aurelienbeton76"target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.facebook.com/aurelien.btn76"target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>© Copyright 2023 A.BETON</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}