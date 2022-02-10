import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Effect Free</title>
      <meta name="description" content="Homepage of the effectfree blog" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="home">
      <Navbar expand="lg" bg="secondary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">EFFECT FREE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-responsive-menu" />
          <Navbar.Collapse id="navbar-responsive-menu">
            <Nav className="ms-auto">
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link className="py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-0 mx-lg-1">
                <Nav.Link className="py-3 px-0 px-lg-3 rounded" href="#resume">
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="py-3 px-0 px-lg-3 rounded"
                  href="#portfolio"
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-3 px-0 px-lg-3 rounded" href="#blog">
                  Blog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="py-3 px-0 px-lg-3 rounded" href="#contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </>
);

export default Home;
