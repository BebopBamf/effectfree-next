import Container from 'react-bootstrap/Container';
import BSNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type LinkProps = {
  to: string;
  name: string;
};

const Link = (props: LinkProps) => {
  const { to, name } = props;

  return (
    <Nav.Item className="mx-0 mx-lg-1" as="li">
      <Nav.Link className="text-uppercase py-3 px-0 px-lg-3 rounded" href={to}>
        {name}
      </Nav.Link>
    </Nav.Item>
  );
};

const Navbar = () => (
  <BSNavbar id="mainNav" expand="lg" bg="secondary" variant="dark" fixed="top">
    <Container>
      <BSNavbar.Brand href="#home" className="text-uppercase">
        effect free
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="navbarResponsive" />
      <BSNavbar.Collapse id="navbarResponsive">
        <Nav className="ms-auto" as="ul">
          <Link to="#about" name="About" />
          <Link to="#blog" name="Blog" />
          <Link to="#portfolio" name="Portfolio" />
          <Link to="#resume" name="Resume" />
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
