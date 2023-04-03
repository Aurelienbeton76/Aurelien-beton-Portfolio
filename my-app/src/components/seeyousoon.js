import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

export const Newsletter = ({ status,}) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="see-you-soon">
              <h3 class="banner-title">See you soon </h3>
        </div>
      </Col>
  )
}