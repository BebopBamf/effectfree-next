import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import avatarImg from '../../public/img/avataaars.svg';

const Banner = () => (
  <header className="masthead bg-primary text-white text-center">
    <Container className="d-flex align-items-center flex-column">
      <Image
        className="masthead-avatar mb-5"
        src={avatarImg}
        alt="Profile Picture"
      />
      <h1 className="masthead-heading text-uppercase mb-0">Effect Free</h1>
    </Container>
  </header>
);

export default Banner;
