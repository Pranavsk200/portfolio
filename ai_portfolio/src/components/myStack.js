import React, { useRef } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import * as SI from 'react-icons/si';

// Motion-enhanced components
const MotionBox = motion(Box);
const MotionText = motion(Text);

// Helper to map your data names to actual React Icons
const IconFetcher = ({ name }) => {
  const iconMap = {
    // Frontend
    js: <SI.SiJavascript color="#F7DF1E" />,
    react: <SI.SiReact color="#61DAFB" />,
    vuejs: <SI.SiVuedotjs color="#4FC08D" />,
    angular: <SI.SiAngular color="#DD0031" />,
    html: <SI.SiHtml5 color="#E34F26" />,
    css: <SI.SiCss3 color="#1572B6" />,
    chartjs: <SI.SiChartdotjs color="#FF6384" />,
    
    // Backend
    python: <SI.SiPython color="#3776AB" />,
    java: <SI.SiOpenjdk color="#ED8B00" />,
    c: <SI.SiC color="#A8B9CC" />,
    nodejs: <SI.SiNodedotjs color="#339933" />,
    expressjs: <SI.SiExpress color="#FFFFFF" />, // Often set to #000000 or #FFFFFF depending on theme
    django: <SI.SiDjango color="#092E20" />,
    drf: <SI.SiDjango color="#A30000" />, // Reusing Django icon for Django REST Framework
    
    // Database
    postgresql: <SI.SiPostgresql color="#4169E1" />,
    mysql: <SI.SiMysql color="#4479A1" />,
    mongodb: <SI.SiMongodb color="#47A248" />,
    qdrant: <SI.SiDatabricks color="#FF5252" />, 
    redis: <SI.SiRedis color="#DC382D" />,
    
    // Tools
    github: <SI.SiGithub color="#FFFFFF" />, // Often set to #000000 or #FFFFFF depending on theme
    gitlab: <SI.SiGitlab color="#FCA121" />,
    aws: <SI.SiAmazonwebservices color="#4b4c4dff" />, // Or #FF9900
    heroku: <SI.SiHeroku color="#430098" />,
    linux: <SI.SiLinux color="#FCC624" />,
    selenium: <SI.SiSelenium color="#43B02A" />,
    celery: <SI.SiCelery color="#37814A" />,
    
    // AI & ML
    tensorflow: <SI.SiTensorflow color="#FF6F00" />,
    keras: <SI.SiKeras color="#D00000" />,
    opencv: <SI.SiOpencv color="#5C3EE8" />,
    pandas: <SI.SiPandas color="#150458" />,
    numpy: <SI.SiNumpy color="#013243" />,
    scikitlearn: <SI.SiScikitlearn color="#F7931E" />,
    langchain: <SI.SiLangchain color="#1C3C3C" />, // Often set to #FFFFFF depending on theme
    langgraph: <SI.SiLangchain color="#1C3C3C" /> // LangGraph typically reuses Langchain's visual identity
  };

  return iconMap[name] || <Box boxSize="full" bg="whiteAlpha.300" borderRadius="full" />;
};

// Component for individual skill tags with spring animation
const SkillTag = ({ name, label }) => (
  <MotionBox
    whileHover={{ scale: 1.04, y: -1 }}
    whileTap={{ scale: 0.98 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    px={3.5}
    py={2}
    bg="whiteAlpha.100"
    border="1px solid"
    borderColor="whiteAlpha.200"
    borderRadius="full"
    css={{ backdropFilter: "blur(6px)" }}
    _hover={{
      bg: "whiteAlpha.200",
      borderColor: "whiteAlpha.300",
    }}
  >
    <HStack gap={2} align="center">
      {/* Dynamic Icon instead of placeholder */}
      <Box boxSize="18px" display="flex" alignItems="center" justifyContent="center">
        <IconFetcher name={name} />
      </Box>
      <Text color="gray.200" fontSize="sm">
        {label}
      </Text>
    </HStack>
  </MotionBox>
);

// Component for each category row
const StackRow = ({ title, items, delay }) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: false }}
  >
    <SimpleGrid columns={{ base: 1, md: "220px 1fr" }} gap={6} w="full">
      <Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          color="gray.300"
          fontWeight="medium"
        >
          {title}
        </Text>
      </Box>
      <Box>
        <Flex gap={4} wrap="wrap">
          {items.map((item) => (
            <SkillTag key={item.name} name={item.name} label={item.label} />
          ))}
        </Flex>
      </Box>
    </SimpleGrid>
  </MotionBox>
);

const MyStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  // Data categorized from your source file 5687
  const stackData = {
    frontend: [
      { name: "js", label: "JavaScript" }, // 
      { name: "react", label: "React.js" }, // 
      { name: "vuejs", label: "VueJS" }, // 
      { name: "angular", label: "Angular JS" }, // 
      { name: "html", label: "HTML" }, // 
      { name: "css", label: "CSS" }, // 
      { name: "chartjs", label: "Chart.js" } // 
    ],
    backend: [
      { name: "python", label: "Python" }, // 
      { name: "java", label: "Java" }, // 
      { name: "c", label: "C" }, // 
      { name: "nodejs", label: "Node.js" }, // 
      { name: "expressjs", label: "Express.js" }, // 
      { name: "django", label: "Django" }, // 
      { name: "drf", label: "Django REST" } // 
    ],
    database: [
      { name: "postgresql", label: "PostgreSQL" }, // 
      { name: "mysql", label: "MySQL" }, // 
      { name: "mongodb", label: "MongoDB" }, // 
      { name: "qdrant", label: "Qdrant" }, // 
      { name: "redis", label: "Redis" } // 
    ],
    tools: [
      { name: "github", label: "GitHub" }, // 
      { name: "gitlab", label: "GitLab" }, // 
      { name: "aws", label: "AWS Cloud" }, // 
      { name: "heroku", label: "Heroku" }, // 
      { name: "linux", label: "Linux/Ubuntu" }, // 
      { name: "selenium", label: "Selenium" }, // 
      { name: "celery", label: "Celery" } // 
    ],
    ai_ml: [
      { name: "tensorflow", label: "TensorFlow" }, // 
      { name: "keras", label: "Keras" }, // 
      { name: "opencv", label: "OpenCV" }, // 
      { name: "pandas", label: "Pandas" }, // 
      { name: "numpy", label: "NumPy" }, // 
      { name: "scikitlearn", label: "Scikit-Learn" }, // 
      { name: "langchain", label: "LangChain" }, // 
      { name: "langgraph", label: "LangGraph" } // 
    ]
  };

  return (
    <Box as="section" id="stack" ref={ref} py={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="8xl">
        <MotionBox
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
            My Stack
          </MotionText>

          <Stack gap={12} align="stretch">
            <StackRow title="Frontend" items={stackData.frontend} delay={0} />
            <StackRow title="Backend" items={stackData.backend} delay={0.1} />
            <StackRow title="Database" items={stackData.database} delay={0.2} />
            <StackRow title="Tools" items={stackData.tools} delay={0.3} />
            <StackRow title="AI & ML" items={stackData.ai_ml} delay={0.4} />
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default MyStack;