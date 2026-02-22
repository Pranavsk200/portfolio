// import React from "react";
// import '../assets/css/navBar.css'

// export default function NavBar(){
//     return (
//     <div className="nav-section">
//         <nav>
//             <div className="nav-container">
//                 <button>Home</button>
//                 <button>About</button>
//                 <button>Work</button>
//                 <button>Projects</button>
//                 <button>Contact</button>
//             </div>
//         </nav>
//     </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import { Box, Flex, Button, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Motion-enhanced Box for the nav container
const MotionBox = motion(Box);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Data sourced from the navigation array
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Bookshelf", href: "/bookshelf", external: true },
    { name: "Contact", href: "#contact" },
  ];

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll and navigation logic
  const handleNavClick = (href, isExternal) => {
    if (isExternal) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      display="flex"
      justifyContent="center"
      pt={4}
    >
      <MotionBox
        as="nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // Dynamic styles based on scroll state
        bg={scrolled ? "rgba(0, 0, 0, 0.1)" : "transparent"}
        css={{ 
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease" 
        }}
        border={scrolled ? "1px solid" : "none"}
        borderColor={scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent"}
        borderRadius="full"
        px={8}
        py={3}
      >
        <HStack gap={8}>
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="ghost"
              onClick={() => handleNavClick(link.href, link.external)}
              color="white"
              _hover={{ color: "white", bg: "whiteAlpha.200" }}
              transition="colors 0.2s"
              fontWeight="medium"
              fontSize="sm" // Retained font size from source
            >
              {link.name}
            </Button>
          ))}
        </HStack>
      </MotionBox>
    </Box>
  );
};

export default Navbar;