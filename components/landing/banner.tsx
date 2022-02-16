import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';

const Banner = () => (
  <header className="masthead bg-primary text-white text-center">
    <Container className="d-flex align-items-center flex-column">
      <h1 className="masthead-heading text-uppercase mb-0">effect free</h1>

      <Container className="bg-secondary" as={motion.div}>
        <h3 className="masthead-subheading">
          A website of a functional programmer somewhere in an upside down
          country
        </h3>
      </Container>
    </Container>
  </header>
);

export default Banner;
