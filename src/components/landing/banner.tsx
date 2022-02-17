import Container from 'react-bootstrap/Container';
import type { Author } from '@sanity/schema';

type BannerProps = {
  authorName: Author['name'];
  description: Author['description'];
  slug: Author['slug'];
};

const Banner = (props: BannerProps) => {
  const { authorName, description, slug } = props;

  return (
    <header className="masthead bg-primary text-white text-center">
      <Container className="d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">effect free</h1>
        <h3 className="masthead-subheading mb-0">
          A website of a functional programmer somewhere in an upside down
          country
        </h3>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-line" />
        </div>

        <p className="masthead-subheading font-weight-light mb-0">{`Created by ${authorName}`}</p>
        <p className="masthead-subheading font-weight-light mb-0">
          {`@${slug.current}`}
        </p>
        <p className="masthead-subheading mb-0">
          {description
            ? description.reduce((str, des) => `${str} - ${des}`)
            : ''}
        </p>
      </Container>
    </header>
  );
};

export default Banner;
