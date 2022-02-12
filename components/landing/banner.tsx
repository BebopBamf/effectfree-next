import Image from 'next/image';
import Container from 'react-bootstrap/Container';

import bannerImg from '../../public/img/banner.jpeg';
import avatarImg from '../../public/img/avataaars.svg';

const Banner = () => (
  <header className="masthead bg-primary text-white text-center">
    <Image src={bannerImg} alt="Banner Image" />
    <Container className="d-flex align-items-center flex-column pt-4">
      <Image
        className="masthead-avatar mb-5"
        src={avatarImg}
        alt="Profile Picture"
      />
      <h1 className="masthead-heading text-uppercase mb-1">effect free</h1>
      <h3 className="masthead-subheading mb-3">
        A website of a functional programmer somewhere in an upside down country
      </h3>
    </Container>
  </header>
);

export default Banner;
