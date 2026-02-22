import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../assets/css/home_section.css"; // Keeping your CSS for section layout

// Wrap Chakra Text with Framer Motion to enable the slide-up animation
const MotionText = motion(Text);

export default function HomeSection() {
  return (
    <section id="home">
      <Box className="info_name" textAlign="center" pt={10}>
        
        {/* 1. Static Name Header */}
        <Heading as="h2" size="2xl" mb={4} color="white" fontSize={{ base: "6xl", sm: "7xl", lg: "8xl" }} fontWeight="bold" paddingBottom={8}>
          Hi, I'm Pranav
        </Heading>

        {/* 2. The Animated Job Titles */}
        <MotionText
          // Animation: Slide Up + Fade In
          as="h2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          
          // Styling: Gradient Text
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          fontWeight="light"
          bgGradient="linear(to-r, white, gray.300)"
          bgClip="text"
          color="transparent"
          display="inline-block"
          minH={{ base: "1.5rem", sm: "2rem", lg: "2.5rem" }}
        >
          <TypeAnimation
            sequence={[
              "R&D Engineer. Full-Stack Developer.", // [cite: 12, 113]
              1000,
              "AI Specialist. Machine Learning Enthusiast.", // [cite: 13, 124]
              1000,
              "R&D Engineer. Full-Stack Developer. AI Specialist. Machine Learning Enthusiast.", // [cite: 12, 13, 113, 124]
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={false} // We hide default cursor to use the custom block below
            style={{ display: "inline-block", fontSize:"1.5rem", minHeight: "2.5rem"}}
          />
          
          {/* Custom Block Cursor '█' */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            style={{ 
              display: "inline-block", 
              marginLeft: "5px", 
              color: "rgba(255,255,255,0.5)" // Opacity 0.494 match
            }}
          >
            █
          </motion.span>
        </MotionText>
      </Box>
    </section>
  );
}