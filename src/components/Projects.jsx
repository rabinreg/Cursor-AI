import { Box, Container, Heading, SimpleGrid, Image, Text, VStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration and admin dashboard.',
    image: 'https://via.placeholder.com/400x300',
    technologies: 'React, Node.js, MongoDB, Stripe',
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://via.placeholder.com/400x300',
    technologies: 'React, Firebase, Material-UI',
    github: '#',
    demo: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application with location-based forecasts and historical data.',
    image: 'https://via.placeholder.com/400x300',
    technologies: 'React, OpenWeather API, Chart.js',
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <Box py={20}>
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading as="h2" size="xl" textAlign="center">
            My Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  bg="white"
                >
                  <Image src={project.image} alt={project.title} />
                  <Box p={6}>
                    <Heading as="h3" size="md" mb={2}>
                      {project.title}
                    </Heading>
                    <Text color="gray.600" mb={4}>
                      {project.description}
                    </Text>
                    <Text fontSize="sm" color="blue.500" mb={4}>
                      {project.technologies}
                    </Text>
                    <Box display="flex" justifyContent="space-between">
                      <Link href={project.github} color="blue.500" isExternal>
                        GitHub
                      </Link>
                      <Link href={project.demo} color="blue.500" isExternal>
                        Live Demo
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects; 