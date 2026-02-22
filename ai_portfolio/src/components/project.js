import React, { useState, useMemo, useRef } from 'react';
import {
  Box,
  Container,
  Text,
  SimpleGrid,
  Button,
  HStack,
  Link,
  Flex,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
// Icons like Github should be imported from your icon library (e.g., lucide-react or react-icons)

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const [filter, setFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(3);

  // Project data sourced from the provided file
  const allProjects = [
    {
      title: "Travel Assistant", // [cite: 123]
      description: "Developed an AI-driven travel assistant automating flight, hotel, car bookings, and trip recommendations. Orchestrated multi-agent workflows using LangGraph and MCP server; implemented A*, Genetic Algorithms, and MILP for optimal route planning.", // [cite: 124, 125]
      visibility: "Portfolio",
      tag: "AI & Automation",
      stack: ["LangGraph", "MCP Server", "A* Search", "Genetic Algorithms", "MILP", "Python"], // [cite: 126]
    },
    {
      title: "Lip Reading Model", // [cite: 30, 127]
      description: "Built a machine learning model that reads the movement of the lip and outputs the text that the speaker is speaking. Achieved this by using Conv3d (CNN), MaxPool3D (CNN) and LSTM algorithm in architecture.", // [cite: 31, 32, 128, 129]
      visibility: "Research / Open Source",
      tag: "Machine Learning / Computer Vision",
      stack: ["TensorFlow", "OpenCV", "Keras", "Python", "Computer Vision", "Conv3d", "LSTM"], // [cite: 32, 130]
    },
    {
      title: "Social Distancing Enforcer", // [cite: 26, 133]
      description: "Built a machine learning model for maintaining social distancing. Achieved this by using YOLO algorithm for detection of human and Euclidean distance metrics for calculating the distance between persons.", // [cite: 27, 28, 135]
      visibility: "Open Source",
      tag: "Machine Learning / Computer Vision",
      stack: ["TensorFlow", "OpenCV", "Keras", "Python", "Computer Vision", "YOLO"], // [cite: 29, 135]
    },
    {
      title: "Real-Time Chat Application", // [cite: 15]
      description: "Built a web-app for real-time communication that allows people to communicate using text, documents, and images. Implemented features like video calling and audio calling.", // [cite: 16, 17, 18]
      visibility: "Portfolio",
      tag: "Full-Stack Web Development",
      stack: ["Django", "Django REST framework", "React.js", "PostgreSQL", "Django channels"], // [cite: 19]
    },
    {
      title: "E-Commerce Web-Application", // [cite: 20]
      description: "Designed and developed a web application to uplift the street vendors community by increasing their sales. Includes location filtering, sorting, and PayPal payment integration.", // [cite: 22, 23, 24]
      visibility: "Portfolio",
      tag: "Full-Stack Web Development",
      stack: ["Django", "Django REST framework", "React.js", "PostgreSQL", "Heroku"], // [cite: 25]
    },
    {
      title: "LinkedIn Automation Tool", // [cite: 46]
      description: "Developed a powerful LinkedIn Automation tool offering features like personalized messaging, sending invitations, campaign scheduling, and profile enrichment, cutting manual tasks by 40%.", // [cite: 46, 120, 121]
      visibility: "Professional Experience",
      tag: "Automation / Full-Stack",
      stack: ["Django", "React.js", "Selenium", "OAuth 2.0", "Celery", "Redis"], // [cite: 47, 121]
    },
    {
      title: "Online Assessment Platform", // [cite: 41, 119]
      description: "Designed an assessment platform enabling admin users to input questions via Excel. Created comprehensive reports featuring graph visualization, risk assessment, and recommendations.", // [cite: 41, 42, 43, 119]
      visibility: "Professional Experience",
      tag: "Full-Stack Web Development",
      stack: ["Django", "Django REST Framework", "ReactJS", "Chart.js"], // [cite: 45, 119]
    },
    {
      title: "Secure Email Relay Service", // [cite: 36, 118]
      description: "Implemented a secure and confidential email handling system utilizing company email to relay messages, ensuring client and recipient email IDs were not exposed and reducing breach risks.", // [cite: 38, 39, 118]
      visibility: "Professional Experience",
      tag: "Cloud / Backend",
      stack: ["AWS", "Amazon SES", "Amazon Lambda", "Amazon RDS"], // [cite: 36, 118]
    },
    {
      title: "E-Learning Platform & Online Shop", // [cite: 57]
      description: "Engaged in building an Online shop, a Social application, and an E-Learning platform featuring a RESTful API architecture during a Django Coding Internship.", // [cite: 56, 57]
      visibility: "Internship Project",
      tag: "Backend Web Development",
      stack: ["Django", "React.js", "Django REST framework", "Django channels"], // [cite: 58]
    }
  ];

  // Logic to handle category filtering
  const filteredProjects = useMemo(() => {
    return filter === "Games" 
      ? allProjects.filter((p) => p.tag === "Games") 
      : allProjects;
  }, [filter]);

  return (
    <Box as="section" id="projects" ref={ref} py={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="8xl">
        <MotionText
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          fontWeight="medium"
          textAlign="left"
          mb={16}
          color="white"
        >
          Personal Projects
        </MotionText>

        {/* Filter Buttons */}
        <HStack gap={3} mb={8}>
          {["All", "Games"].map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={filter === cat ? "solid" : "outline"}
              bg={filter === cat ? "whiteAlpha.300" : "transparent"}
              borderColor="whiteAlpha.300"
              color="gray.200"
              _hover={{ bg: filter === cat ? "whiteAlpha.400" : "whiteAlpha.200" }}
              onClick={() => {
                setFilter(cat);
                setDisplayCount(3);
              }}
            >
              {cat}
            </Button>
          ))}
        </HStack>

        {/* Projects Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {filteredProjects.slice(0, displayCount).map((project, i) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3, once: false }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              bg="whiteAlpha.100"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              css={{ backdropFilter: "blur(6px)" }}
              display="flex"
              flexDirection="column"
              height="full"
            >
              <Text fontSize="xl" fontWeight="semibold" color="white" mb={2}>
                {project.title}
              </Text>
              
              {project.visibility && (
                <Box
                  as="span"
                  px={3}
                  py={1}
                  mb={4}
                  bg="whiteAlpha.200"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  borderRadius="full"
                  color="gray.200"
                  fontSize="2xs"
                  fontWeight="medium"
                  width="fit-content"
                >
                  {project.visibility}
                </Box>
              )}

              <Text color="gray.300" mb={6} flex="1">
                {project.description}
              </Text>

              <Box mt="auto">
                <HStack gap={3} mb={4}>
                  {project.github && (
                    <Button as={Link} href={project.github} target="_blank" size="sm" bg="black" color="white">
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button as={Link} href={project.demo} target="_blank" size="sm" variant="outline" color="gray.200">
                      Demo
                    </Button>
                  )}
                </HStack>

                {project.stack && (
                  <Flex gap={2} wrap="wrap">
                    {project.stack.map((tech) => (
                      <Box
                        key={tech}
                        px={2.5}
                        py={1}
                        bg="whiteAlpha.100"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        borderRadius="full"
                        color="gray.300"
                        fontSize="2xs"
                      >
                        {tech}
                      </Box>
                    ))}
                  </Flex>
                )}
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Show More / Less Logic */}
        <Flex justify="center" mt={10}>
          {displayCount < filteredProjects.length ? (
            <Button
              onClick={() => setDisplayCount((prev) => prev + 3)}
              variant="outline"
              color="gray.200"
              borderColor="whiteAlpha.300"
            >
              Show more
            </Button>
          ) : filteredProjects.length > 3 ? (
            <Button
              onClick={() => setDisplayCount(3)}
              variant="outline"
              color="gray.200"
              borderColor="whiteAlpha.300"
            >
              Show less
            </Button>
          ) : null}
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;