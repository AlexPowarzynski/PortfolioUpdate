import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button, Container, Row, Col, Accordion, Card } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div></div>
          <div className="App">
            <Accordion defaultActiveKey="0">
            
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Info
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Personal Info/Intro</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Projects
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Scrollable projects</Card.Body>
                </Accordion.Collapse>
              </Card>
            
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Contact 
    </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>Contact Information</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
