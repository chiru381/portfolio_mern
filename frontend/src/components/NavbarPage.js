import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Chiranjeevi Kosanam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">LinkedIn</Nav.Link>
            <Nav.Link href="#link">Github</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
            <Link to="/projects" className='nav-link'><NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item></Link>
            <Link to="/skills" className='nav-link'><NavDropdown.Item href="#action/3.2">Skills</NavDropdown.Item></Link>
            <Link to="/education" className='nav-link'><NavDropdown.Item href="#action/3.3">Education</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to="/experience" className='nav-link'><NavDropdown.Item href="#action/3.4">
                Experience
              </NavDropdown.Item></Link>
            </NavDropdown>
            <Nav.Link href="#link">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;