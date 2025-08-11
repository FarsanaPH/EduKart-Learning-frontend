import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

function CounterSection() {
  const stats = [
    { label: 'Expert Tutors', count: 240 },
    { label: 'Hours Content', count: 20000 },
    { label: 'Courses', count: 587 },
    { label: 'Students Enrolled', count: 1200 },
  ];

  return (
    <div style={{ backgroundColor: '#0c60deff', color: '#fff' }} className="py-4">
      <Container>
        <Row className="text-center">
          {stats?.map((stat, idx) => (
            <Col xs={6} md={3} className="mb-4 mb-md-0" key={idx}>
              <h2 className="fw-bold display-6">
                <CountUp end={stat.count} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />+
              </h2>
              <p className="mb-0">{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CounterSection;
