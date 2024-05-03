import { Box, Button, Flex, Heading, Image, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            MyBrand
          </Heading>
        </Flex>

        <Spacer />

        <Box display={{ base: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
          <Button bg="transparent" border="1px">
            Login
          </Button>
        </Box>
      </Flex>

      {/* Hero Section */}
      <Flex align="center" justify="center" height="70vh" bg="gray.200">
        <VStack spacing={8}>
          <Heading as="h2" size="2xl" textAlign="center">
            Welcome to MyBrand
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Your journey to greatness starts here.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="teal" variant="solid">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Featured Image */}
      <Box w="full" p={4}>
        <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE0NzQ0MzUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Image" borderRadius="lg" />
      </Box>

      {/* Footer */}
      <Flex as="footer" align="center" justify="center" wrap="wrap" padding={6} bg="teal.600" color="white">
        <Text>© 2023 MyBrand. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
