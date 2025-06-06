import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Unauthorized = () => (
  <Container className="py-4 text-center">
    <Alert variant="danger">
      <h4>Access Denied</h4>
      <p>You are not authorized to view this page.</p>
    </Alert>
  </Container>
);

export default Unauthorized;
