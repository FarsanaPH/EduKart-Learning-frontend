import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="bg-dark text-light pt-4" >
      <Container>
        <Row>
          {/* Logo & About */}
          <Col md={4} className="mb-4">
            <h4
              className="fw-bold"
              style={{ color: "#ed5605" }}
            >
              EduKart
            </h4>
            <p className="small text-light mb-0">
              We provide world-class courses to empower learners worldwide. Join
              our community and start your journey today.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4 d-flex justify-content-md-center">
            <div>
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    href="#"
                    className="quick-link text-decoration-none "
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="quick-link text-decoration-none "
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/allcourses");
                    }}
                  >
                    Courses
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#aboutus"
                    className="quick-link  text-decoration-none"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#contact"
                    className="quick-link  text-decoration-none "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Col>


          {/* Social Media */}
          <Col md={4} className="mb-4 d-flex justify-content-center">
            <div>
              <h5 className="fw-bold mb-3 text-white">Follow Us</h5>
              <ul className="list-unstyled d-flex mb-0">
                <li className="me-3">
                  <a href="#" className="quick-link fs-5 text-decoration-none">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="quick-link fs-5 text-decoration-none">
                    <FaTwitter />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="quick-link fs-5 text-decoration-none">
                    <FaInstagram />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="quick-link fs-5 text-decoration-none">
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr />

        {/* Bottom Text */}
        <Row>
          <Col className="text-center">
            <p className="small text-light mb-3">
              © {new Date().getFullYear()} EduKart. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
