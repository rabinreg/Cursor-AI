import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Box>
      <Container maxW="1200px" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={6} align="center" textAlign="center">
            <Heading as="h1" size="2xl" bgGradient="linear(to-r, blue.400, teal.400)" bgClip="text">
              Welcome to My Portfolio
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </Text>
            <Button
              colorScheme="blue"
              size="lg"
              as="a"
              href="#projects"
              _hover={{ transform: 'scale(1.05)' }}
            >
              View My Work
            </Button>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Home; 