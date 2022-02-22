import NLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Spacer,
  HStack,
  Link as CLink,
} from '@chakra-ui/react';

type LinkProps = {
  to: string;
  children: string;
};

const Link = (props: LinkProps) => {
  const { to, children } = props;

  return (
    <NLink href={to} passHref>
      <CLink>{children}</CLink>
    </NLink>
  );
};

const PageLinks = () => (
  <HStack spacing="4">
    <Link to="/">Home</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/blog">Blog</Link>
  </HStack>
);

const HomeLinks = () => (
  <HStack spacing="4">
    <Link to="/#about">About</Link>
    <Link to="/#authors">Authors</Link>
  </HStack>
);

const Brand = () => <Link to="/">Effect Free</Link>;

const Navbar = () => (
  <Box bg="nav.800">
    <Container maxW="container.xl">
      <Flex p="4">
        <PageLinks />
        <Spacer />
        <Brand />
        <Spacer />
        <HomeLinks />
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
