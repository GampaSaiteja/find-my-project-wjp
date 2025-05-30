import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="py-1">
      <Container fluid>
        {/* Logo/Brand on the left */}
        <Navbar.Brand as={Link} to="/" className="me-5 d-flex align-items-center">

          {/* <Image
            src={logo} // or {logo} if using webpack import
            alt="Cinemastash Logo"
            height="80"
            className="d-inline-block align-top me-2"
          /> */}

          <span className="fw-bold" style={{ fontSize: '1.8rem' }} >findMyProject</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" justify-content="true">
          
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to="/" className="mx-2 fw-bold">Home</Nav.Link>
            {/* {isLoggedIn && ( */}
              <Nav.Link as={Link} to="/watchlist" className="mx-2 fw-bold">My Watchlist</Nav.Link>
            {/* )} */}
            <Nav.Link as={Link} to="/about" className="mx-2 fw-bold">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="mx-2 fw-bold">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/feedback" className="mx-2 fw-bold">Feedback</Nav.Link>
            {/* Auth buttons grouped together */}
            {/* {isLoggedIn ? ( */}
              <Button
                
                // onClick={handleLogout}
                className="ms-2 fw-bold px-3"
              >
                Logout
              </Button>
            {/* ) : (
              <>
                <Nav.Link as={Link} to="/login" className="mx-2 fw-bold">Login</Nav.Link>
                <Button
                  as={Link}
                  to="/signup"
                  variant='danger'
                  className="ms-2 fw-bold px-3"
                // style={{ borderRadius: '20px' }}
                >
                  Sign Up
                </Button>
              </>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )


};

export default NavigationBar;