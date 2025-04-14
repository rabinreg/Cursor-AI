import { Box, Container, Heading, VStack, Input, Textarea, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h2" size="xl" mb={4}>
                Get In Touch
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Feel free to reach out for collaborations or just a friendly hello
              </Text>
            </Box>

            <Box w="100%" maxW="600px">
              <VStack spacing={6}>
                <Input
                  placeholder="Your Name"
                  size="lg"
                  bg="white"
                  _focus={{ borderColor: 'blue.500' }}
                />
                <Input
                  placeholder="Your Email"
                  size="lg"
                  bg="white"
                  _focus={{ borderColor: 'blue.500' }}
                />
                <Textarea
                  placeholder="Your Message"
                  size="lg"
                  bg="white"
                  _focus={{ borderColor: 'blue.500' }}
                  rows={6}
                />
                <Button
                  colorScheme="blue"
                  size="lg"
                  w="100%"
                  _hover={{ transform: 'scale(1.02)' }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>

            <Box>
              <VStack spacing={4}>
                <Text fontSize="lg" fontWeight="bold">
                  Connect with me
                </Text>
                <Box display="flex" gap={6}>
                  <Link href="#" isExternal>
                    <FaGithub size={24} />
                  </Link>
                  <Link href="#" isExternal>
                    <FaLinkedin size={24} />
                  </Link>
                  <Link href="#" isExternal>
                    <FaTwitter size={24} />
                  </Link>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Contact; 