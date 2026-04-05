import React from 'react';
import { Box, Container, Stack, Text, Icon, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// Note: In the source, these are imported from specific library paths
import { Github, Linkedin, FileText } from 'lucide-react'; 

// Creating motion-enhanced components as seen in the source
const MotionBox = motion(Box);
const MotionText = motion(Text);

const AboutMe = () => {
  return (
    <Box
      as="section"
      id="about"
      py={16}
      px={{ base: 4, sm: 6, lg: 8 }}
    >
      <Container maxW="8xl">
        <Stack spacing={8} align="flex-start">
          {/* Section Heading */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <Text
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              fontWeight="medium"
              color="white"
            >
              About Me
            </Text>
          </MotionBox>

          {/* About Text Description */}
          <MotionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            fontSize={{ base: "md", sm: "lg", lg: "xl" }}
            color="gray.300"
            maxW="7xl"
            lineHeight="relaxed"
          >
          Hi, I'm Pranav. I'm an R&D Engineer and Full-Stack Developer with a passion for blending artificial intelligence with robust web technologies. With experience building everything from advanced OCR models and multi-agent AI workflows to scalable web applications using Django and React, I specialize in delivering intelligent, production-ready systems. I have a deep passion for solving complex problems, and I am always actively looking to learn about new technologies and opportunities. Let's connect!
          </MotionText>

          {/* Social Icons Links */}
          <Flex gap={6}>
            <Icon
              as={Github}
              boxSize={6}
              color="gray.400"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              cursor="pointer"
              onClick={() => window.open("https://github.com/Pranavsk200", "_blank")}
              aria-label="GitHub profile"
            />
            <Icon
              as={Linkedin}
              boxSize={6}
              color="gray.400"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              cursor="pointer"
              onClick={() => window.open("https://www.linkedin.com/in/pranavsk-dev/", "_blank")}
              aria-label="LinkedIn profile"
            />
            <Icon
              as={FileText}
              boxSize={6}
              color="gray.400"
              _hover={{ color: "white" }}
              transition="colors 0.2s"
              cursor="pointer"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Resume"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutMe;