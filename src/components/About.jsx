import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const MotionBox = motion(Box);

const skills = [
  { icon: FaCode, title: 'Frontend Development', description: 'React, JavaScript, HTML, CSS' },
  { icon: FaServer, title: 'Backend Development', description: 'Node.js, Express, Python' },
  { icon: FaDatabase, title: 'Database', description: 'MongoDB, PostgreSQL, MySQL' },
  { icon: FaTools, title: 'Tools & Technologies', description: 'Git, Docker, AWS, CI/CD' },
];

const About = () => {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={12} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" size="xl" mb={4}>
                About Me
              </Heading>
              <Text fontSize="lg" color="gray.600">
                I am a passionate Full Stack Developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies, I create efficient
                and scalable solutions.
              </Text>
            </Box>

            <Box>
              <Heading as="h3" size="lg" mb={8} textAlign="center">
                Skills & Expertise
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                {skills.map((skill, index) => (
                  <MotionBox
                    key={index}
                    p={6}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="md"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <VStack spacing={4}>
                      <Icon as={skill.icon} w={8} h={8} color="blue.500" />
                      <Heading as="h4" size="md">
                        {skill.title}
                      </Heading>
                      <Text color="gray.600" textAlign="center">
                        {skill.description}
                      </Text>
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About; 