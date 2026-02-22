import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  Flex,
  Circle,
  Icon,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react'; // Ensure lucide-react is installed

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Logic for EmailJS or similar service would go here as seen in source
    setTimeout(() => setLoading(false), 2000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box as="section" id="contact" ref={ref} py={20} px={{ base: 4, sm: 6, lg: 8 }}>
      <Container maxW="8xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="start">
          
          {/* Left Column: Info */}
          <Box>
            <Stack align="flex-start" gap={6}>
              <Text
                fontSize="xs"
                color="gray.400"
                textTransform="uppercase"
                letterSpacing="wider"
                fontWeight="medium"
              >
                Contact
              </Text>
              
              <MotionText
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                fontWeight="bold"
                color="white"
              >
                Get In Touch
              </MotionText>

              <Text color="gray.300" maxW="2xl">
                I'm always looking to learn and collaborate on new ideas. Let's connect!
              </Text>

              <Stack gap={6} align="flex-start">
                <HStack gap={4}>
                  <Circle
                    size="40px"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Icon as={MapPin} color="gray.200" />
                  </Circle>
                  <Stack gap={0} align="flex-start">
                    <Text color="gray.400" fontWeight="medium">
                      Location
                    </Text>
                    <Text color="gray.300">
                      Bangalore, IN
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </Stack>
          </Box>

          {/* Right Column: Form */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Box
              bg="whiteAlpha.100"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="xl"
              css={{ backdropFilter: "blur(6px)" }}
            >
              <form onSubmit={handleSubmit}>
                <Stack gap={6}>
                  <Box>
                    <Input
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      bg="blackAlpha.400"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _focus={{ borderColor: "brand.500" }}
                    />
                  </Box>
                  <Box>
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      bg="blackAlpha.400"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _focus={{ borderColor: "brand.500" }}
                    />
                  </Box>
                  <Box>
                    <Textarea
                      placeholder="Your message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      bg="blackAlpha.400"
                      borderColor="whiteAlpha.300"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _focus={{ borderColor: "brand.500" }}
                      resize="none"
                    />
                  </Box>

                  <MotionButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    width="full"
                    bg="black"
                    _hover={{ bg: "blackAlpha.800" }}
                    color="white"
                    fontWeight="medium"
                    py={3}
                    loading={loading}
                    loadingText="Sending..."
                  >
                    Send message
                  </MotionButton>
                </Stack>
              </form>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

// Helper for horizontal alignment
const HStack = ({ children, ...props }) => (
  <Flex align="center" {...props}>
    {children}
  </Flex>
);

export default Contact;