import { Box, Container, Text, Flex, Button } from "@chakra-ui/react";
import React from "react";

function TryDemo() {
  return (
    <Box bg={"#1a1d24"} textColor={"white"} pb={8}>
      <Container maxW={1300}>
        <Box   >
          <Box textAlign={"center"} py={4}>
            <Text fontSize={{base:'24px',md:'40px'}} fontWeight={'bold'} >  Generate Creative AI Copy On-The-Spot,</Text>
            <Text fontSize={{base:'24px',md:'40px'}} fontWeight={'bold'}>Across Your Favorite Tools</Text>
          </Box>

          <Flex justifyContent={'space-between'} gap={8} py={4} direction={{base:'column',md:'row'}}>
            <Box p={8}>
              <Text fontSize={{base:'12px',md:'24px'}} fontWeight={'bold'} px={4}>Generates quality contents</Text>
              <Text as={"p"} p={4}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
            <Box p={8}>
              <Text fontSize={{base:'12px',md:'24px'}} fontWeight={'bold'} px={4}>Provides Useful Suggestions</Text>
              <Text as={"p"} p={4}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
            <Box p={8}>
              <Text fontSize={{base:'12px',md:'24px'}} fontWeight={'bold'} px={4}>Improves Products Productivity</Text>
              <Text as={"p"} p={4}>
                This tool helps you find the right keywords to target for your
                content. By using the Google Keyword Planner, you can see how
                often people
              </Text>
            </Box>
          </Flex>

          <Box textAlign={'center'} py={8}>
                <Button textColor={"black"} bg={'yellow'} >
                 Try a Demo
                </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TryDemo;
