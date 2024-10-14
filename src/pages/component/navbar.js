import {Container, Nav, Navbar}from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar expand="lg" className={'${style.navGradiente} px-3 my-0 border-2 border border-success rounded rounded-3'}>
      <Container>
        <Navbar.Brand href="#/">6B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}