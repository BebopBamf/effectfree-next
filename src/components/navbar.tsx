import NLink from 'next/link';
import {
  Box,
  Container,
  Flex,
  Spacer,
  HStack,
  VStack,
  LinkBox,
  LinkOverlay,
  Link as CLink,
  IconButton,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

import functionIcon from '../../public/icon.svg';

type LinkProps = {
  to: string;
  children: string;
};

const Link = (props: LinkProps) => {
  const { to, children } = props;

  return (
    <NLink href={to} passHref>
      <CLink color="white">{children}</CLink>
    </NLink>
  );
};

const pageRoutes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

const pageLinks = pageRoutes.map(({ name, path }) => (
  <Link to={path} key={name}>
    {name}
  </Link>
));

const homeRoutes = [
  { name: 'About', path: '/#about' },
  { name: 'Authors', path: '/#authors' },
];

const homeLinks = homeRoutes.map(({ name, path }) => (
  <Link to={path} key={name}>
    {name}
  </Link>
));

const Brand = () => (
  <LinkBox>
    <Flex align="center">
      <Image width="32" height="32" src={functionIcon} alt="Effect Free Logo" />
      <Text color="white" fontWeight="semibold" fontSize="2xl" p="2">
        <NLink href="/" passHref>
          <LinkOverlay href="/">Effect Free</LinkOverlay>
        </NLink>
      </Text>
    </Flex>
  </LinkBox>
);

const NavmenuButton = () => (
  <IconButton
    display={['inline-flex', 'inline-flex', 'inline-flex', 'none']}
    aria-label="Open mobile nav menu"
    icon={<FaBars />}
  />
);

// const TabletNavmenu = () => ();

// const MobileNavmenu = () => ();

const Navbar = () => (
  <Box bg="nav.800">
    <Container maxW="container.xl">
      <Flex py="4">
        <NavmenuButton />
        <HStack spacing="4" display={['none', 'none', 'none', 'flex']}>
          {pageLinks}
        </HStack>
        <Spacer />
        <Brand />
        <Spacer />
        <HStack spacing="4" display={['none', 'none', 'none', 'flex']}>
          {homeLinks}
        </HStack>
      </Flex>
    </Container>
  </Box>
);

export default Navbar;
