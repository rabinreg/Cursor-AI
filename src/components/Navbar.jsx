import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4} py={3}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          Your Name
        </Link>
        <Flex gap={4}>
          <Link as={RouterLink} to="/" color="white" _hover={{ color: 'blue.300' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" color="white" _hover={{ color: 'blue.300' }}>
            About
          </Link>
          <Link as={RouterLink} to="/projects" color="white" _hover={{ color: 'blue.300' }}>
            Projects
          </Link>
          <Link as={RouterLink} to="/contact" color="white" _hover={{ color: 'blue.300' }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 