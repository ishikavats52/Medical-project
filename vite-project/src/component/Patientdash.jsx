import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-light p-4">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{ height: '40px', width: '40px' }}
            >
              JP
            </div>
            <div className="ms-3">
              <h1 className="h4">John Doe</h1>
              <p className="text-muted">Patient</p>
            </div>
          </div>
          <Nav className="d-flex">
            <Nav.Link href="/" className="text-dark">Dashboard</Nav.Link>
            <Nav.Link href="/medical-records" className="text-dark">Medical Records</Nav.Link>
            <Nav.Link href="/appointments" className="text-dark">Appointments</Nav.Link>
            <Nav.Link href="/settings" className="text-dark">Settings</Nav.Link>
          </Nav>
        </Container>
      </header>

      <main className="flex-fill p-4 bg-light">
        <Container>
          <Row className="g-4">
            <Col sm={6} lg={4}>
              <Card
                style={{
                  background: 'linear-gradient(to right, #4c51bf, #6b46c1)',
                }}
                className="text-white shadow-lg"
              >
                <Card.Body>
                  <Card.Title>Medical Records</Card.Title>
                  <Card.Text>View your medical history</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4 a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="ms-2">
                        <p className="fw-medium">Blood Test Results</p>
                        <p className="text-muted">Uploaded</p>
                      </div>
                    </div>
                    <Button variant="outline-light" className="rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                  <hr className="my-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.3)' }} />
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4 a2 2 0 0 0 2 2h4" />
                      </svg>
                      <div className="ms-2">
                        <p className="fw-medium">X-Ray Report</p>
                        <p className="text-muted">Uploaded</p>
                      </div>
                    </div>
                    <Button variant="outline-light" className="rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4 a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" x2="12" y1="15" y2="3" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} lg={4}>
              <Card
                style={{
                  background: 'linear-gradient(to right, #2b6cb0, #3182ce)',
                }}
                className="text-white shadow-lg"
              >
                <Card.Body>
                  <Card.Title>Upcoming Appointments</Card.Title>
                  <Card.Text>Check your upcoming appointments</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                      </svg>
                      <div className="ms-2">
                        <p className="fw-medium">Checkup with Dr. Smith</p>
                        <p className="text-muted">May 1</p>
                      </div>
                    </div>
                    <Button variant="outline-light" className="rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18" />
                      </svg>
                      <span className="sr-only">Add to calendar</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} lg={4}>
              <Card
                style={{
                  background: 'linear-gradient(to right, #dd6b20, #ed8936)',
                }}
                className="text-white shadow-lg"
              >
                <Card.Body>
                  <Card.Title>Notifications</Card.Title>
                  <Card.Text>Check your notifications</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                      <div className="ms-2">
                        <p className="fw-medium">Lab Results Ready</p>
                        <p className="text-muted">Updated May 10</p>
                      </div>
                    </div>
                    <Button variant="outline-light" className="rounded-circle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                      <span className="sr-only">View</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
