import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // "admin" or "user"

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <Navbar expand="lg" className="py-1 bg-dark shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold" style={{ fontSize: '1.8rem' }}>
          findMyProject
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="ms-auto align-items-center">
            {userRole === 'admin' ? (
              <>
                <Nav.Link as={Link} to="/admin/projects" className="mx-2 fw-bold">Manage Projects</Nav.Link>
                <Nav.Link as={Link} to="/admin/users" className="mx-2 fw-bold">Manage Users</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/" className="mx-2 fw-bold">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="mx-2 fw-bold">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="mx-2 fw-bold">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/feedback" className="mx-2 fw-bold">Feedback</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="mx-2 fw-bold">My Projects</Nav.Link>
              </>
            )}

            {isLoggedIn ? (
              <Button onClick={handleLogout} className="ms-2 fw-bold px-3">
                Logout
              </Button>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="mx-2 fw-bold">Login</Nav.Link>
                <Button as={Link} to="/signup" variant="danger" className="ms-2 fw-bold px-3">
                  Sign Up
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
