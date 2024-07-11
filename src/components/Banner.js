// PortfolioSection.js

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Banner = () => {
  return (
    <Container className="px-5 py-5" id="featured-3">
      <h2
        className="pb-2 border-bottom"
        style={{ textAlign: "center", fontFamily: "cursive" }}
      >
        {/* Add any heading text here */}
      </h2>
      <Row className="g-4 py-5 row-cols-1 row-cols-lg-2">
        <Col lg={4} className="d-flex align-items-end">
          <Card className="feature d-flex flex-column h-100 justify-content-end">
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title
                style={{
                  borderBottom: "solid 3px",
                  padding: "20px",
                  marginTop:"200px",
                  textAlign: "center",
                }}
              >
                HI, I AM Mohammad Kreishan
              </Card.Title>
              <Card.Text style={{ textAlign: "center" }}>
                A Full-Stack Developer & Design Enthusiast
              </Card.Text>
              <a
                href="https://k-book.netlify.app/"
                target="_blank"
                className="icon-link"
              >
                Download My Resume
                <svg
                  className="bi"
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <use xlinkHref="#chevron-right" />
                </svg>
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="feature d-flex flex-column h-100">
            <div className="feature-icon bg-primary bg-gradient">
              <img
                src="https://res.cloudinary.com/dalwd5c23/image/upload/v1705177932/samples/cup-on-a-table.jpg"
                alt="First slide"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
