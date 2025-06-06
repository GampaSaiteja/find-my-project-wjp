import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubLink: '',
  });
  const [message, setMessage] = useState('');

  // Load mock projects on page load
  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        title: "AI Project Finder",
        description: "A platform to find and share student projects.",
        githubLink: "https://github.com/example/project1"
      },
      {
        id: 2,
        title: "Weather Dashboard",
        description: "React + API project for weather updates.",
        githubLink: "https://github.com/example/weather"
      }
    ];
    setProjects(mockProjects);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate project upload
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
    };
    setProjects((prev) => [...prev, newProject]);
    setFormData({ title: '', description: '', githubLink: '' });
    setMessage('Project uploaded locally!');
  };

  // Simulate project deletion
  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 text-center">Manage your projects</h2>

      {message && <Alert variant="info">{message}</Alert>}

      {/* Upload Form */}
      <Card className="mb-4">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control
                type="url"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Upload Project
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Project List */}
      <h4>All Projects</h4>
      <Row>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <Col key={project.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Link href={project.githubLink} target="_blank" rel="noreferrer">
                    GitHub
                  </Card.Link>
                  <Button
                    variant="danger"
                    size="sm"
                    className="mt-2 d-block"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProjectManager;
