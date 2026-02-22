import React, { useRef } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Flex,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  HStack,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

// Creating motion components
const MotionBox = motion(Box);
const MotionText = motion(Text);

// Experience data based on your source
const experienceData = [
  {
  title: "R&D Engineer", // [cite: 113]
    company: "Ninestars Information Technologies", // [cite: 113]
    period: "Jan 2025 - Present", // [cite: 113, 114]
    location: "Bangalore, India",
    link: "https://www.ninestars.in/", 
    stack: ["tensorflow", "django", "reactjs", "vuejs"], // [cite: 115, 116]
    description: {
      "Advanced OCR Model Development": [
        "Developed an advanced OCR model leveraging TensorFlow, surpassing industry benchmarks in document recognition accuracy and processing speed.", // [cite: 115]
        "Improved extraction reliability by 35%." // [cite: 115]
      ],
      "Browser-Based Publishing Tool": [
        "Engineered a browser-based publishing tool replicating core Adobe InDesign functionalities using Django, ReactJS, and VueJS.", // [cite: 116]
        "Streamlined content production workflows and reduced manual layout time by 40%." // [cite: 116]
      ]
    }
  },
  {
    title: "Associate Software Engineer", // [cite: 117]
    company: "Blackcoffer", // [cite: 117]
    period: "Feb 2023 - Dec 2023", // [cite: 117]
    location: "Bangalore, India",
    link: "https://blackcoffer.com/", 
    stack: ["aws", "django", "reactjs", "chartjs", "selenium", "celery", "redis"], // [cite: 118, 119, 120, 121]
    description: {
      "Secure Email Relay Service": [
        "Built a secure email relay service using Amazon SES, AWS Lambda, and Amazon RDS to route messages through company-managed addresses.", // [cite: 118]
        "Improved confidentiality and reduced breach risks by 30%." // [cite: 118]
      ],
      "Assessment Platform": [
        "Created an assessment platform using Django, Django REST Framework, and ReactJS, enabling Excel-based input and Chart.js visualizations.", // [cite: 119]
        "Streamlined evaluations and boosted decision-making by 20%." // [cite: 119]
      ],
      "LinkedIn Automation Tool": [
        "Developed a LinkedIn Automation tool with personalized messaging, campaign scheduling, and profile enrichment via Django, ReactJS, Selenium, Celery, Celery Beat, Redis, and OAuth 2.0.", // [cite: 120, 121]
        "Raised engagement by 25% and cut manual tasks by 40%." // [cite: 121]
      ]
    }
  },
  {
    title: "Data Science Intern", // [cite: 132]
    company: "LetsGrowMore Pvt. Ltd", // [cite: 132]
    period: "2022", 
    location: "Remote/India",
    link: "https://letsgrowmore.in/",
    stack: ["python", "tensorflow", "pandas", "matplotlib"], // [cite: 49, 134]
    description: {
      "Data Analysis & ML Pipelines": [
        "Analyzed datasets and developed ML pipelines using Python and TensorFlow to streamline data preprocessing and model training.", // [cite: 50, 134]
        "Conducted data analysis and visualization on real-world datasets to identify trends and insights using Python, Pandas, and Matplotlib."// [cite: 49]
      ]
    }
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <Box as="section" id="work" ref={ref} py={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="8xl">
        <MotionText
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          fontWeight="medium"
          textAlign="left"
          mb={8}
          color="white"
        >
          Experience
        </MotionText>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* v3 uses AccordionRoot instead of Accordion */}
          <AccordionRoot collapsible defaultValue={["0"]}>
            {experienceData.map((job, index) => (
              <AccordionItem
                key={`${job.title}-${index}`}
                value={index.toString()}
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="md"
                mb={4}
                bg="whiteAlpha.100"
                css={{ backdropFilter: "blur(6px)" }}
              >
                {/* AccordionItemTrigger replaces AccordionButton */}
                <AccordionItemTrigger
                  px={5}
                  py={4}
                  _expanded={{ bg: "whiteAlpha.200" }}
                  width="full"
                >
                  <Flex align="center" justify="space-between" w="full" gap={4} textAlign="left">
                    <Stack align="start" gap={0}>
                      <Text color="white" fontWeight="medium">
                        {job.title}
                      </Text>
                      <HStack gap={2}>
                        {job.link ? (
                          <Link href={job.link} variant="plain" color="gray.400" fontSize="sm" _hover={{ color: "gray.300" }}>
                            {job.company}
                          </Link>
                        ) : (
                          <Text color="gray.400" fontSize="sm">{job.company}</Text>
                        )}
                        <Text color="gray.400" fontSize="sm">|</Text>
                        <Text color="gray.400" fontSize="sm">{job.location}</Text>
                      </HStack>
                    </Stack>
                    <Text color="gray.400" fontSize="sm" whiteSpace="nowrap">
                      {job.period}
                    </Text>
                  </Flex>
                </AccordionItemTrigger>

                {/* AccordionItemContent replaces AccordionPanel */}
                <AccordionItemContent px={5} py={5}>
                  <Stack align="start" gap={4}>
                    {Object.entries(job.description).map(([key, bullets]) => (
                      <Stack key={key} align="start" gap={1} width="full">
                        <Text color="gray.200" fontWeight="semibold">
                          {key}
                        </Text>
                        {bullets.map((bullet, i) => (
                          <Text key={i} color="gray.300" lineHeight="relaxed">
                            • {bullet}
                          </Text>
                        ))}
                      </Stack>
                    ))}

                    {job.stack && (
                      <Stack align="start" gap={2} pt={2}>
                        <Text color="gray.400" fontWeight="medium" fontSize="sm">
                          Tech Stack:
                        </Text>
                        <HStack gap={2} wrap="wrap">
                          {job.stack.map((tech) => (
                            <Box
                              key={tech}
                              px={2}
                              py={0.5}
                              bg="whiteAlpha.200"
                              borderRadius="md"
                              fontSize="xs"
                              color="gray.300"
                            >
                              {tech}
                            </Box>
                          ))}
                        </HStack>
                      </Stack>
                    )}
                  </Stack>
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Experience;