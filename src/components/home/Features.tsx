import { Box, Container, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Features() {
  return (
    <Box bg={"#1a1d24"} py={16}>
      <Container maxW={1300}>
        <Box textColor={"white"} gap={4}>
          <Flex
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            pb={12}
          >
            <Box p={12}>
              <Text textColor={"yellow"}>Feature1</Text>
              <Text
                fontWeight={"bold"}
                py={4}
                fontSize={{ base: "32px", md: "50px" }}
              >
                Let's Create AI-Powered Content With A Single Click.
              </Text>
              <Text pb={4}>
                To create powerful content, you need to know who you're
                targeting. Identify your target audience and understand their
                needs, interests, and pain points.
              </Text>
              <Text pb={2}>
                Start creating powerful content, for your next ads
              </Text>
              <Text pb={2}>
                Let's Communicate with your customers with emotions
              </Text>
              <Text>
                Use visuals like images, videos, or infographics to make your
                content more engaging
              </Text>
              <Link href="#" display={'flex'}  pt={4}  _hover={{ textDecoration: 'underline',fontWeight:'bold' }}>
                <Text  textColor={"yellow"}>
                  Get Started Free 
                </Text>  <HiOutlineArrowUpRight
            style={{ fontSize: 16, color: "yellow",marginLeft:5,marginTop:4}}
          />
              </Link>
            </Box>
            <Box>
              <Image width={1000} height={1000} src="/fea1.svg" alt="" />
            </Box>
          </Flex>

          <Flex
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            pb={12}
          >
            <Box>
              <Image width={1000} height={1000} src="/fea2.svg" alt="" />
            </Box>
            <Box p={12}>
              <Text textColor={"yellow"}>Feature2</Text>
              <Text
                fontWeight={"bold"}
                py={4}
                fontSize={{ base: "32px", md: "50px" }}
              >
                A Magical Tool To Optimize Your Content For First Page Rankings
              </Text>
              <Text pb={4}>
                A Magical Tool to Optimize you content for the first know who
                you're targeting. Identify your target audience and understand
                their needs, interests, and pain points.
              </Text>
            
              <Link href="#" display={'flex'}  pt={4}  _hover={{ textDecoration: 'underline',fontWeight:'bold' }}>
                <Text  textColor={"yellow"}>
                  Request A Demo
                </Text>  <HiOutlineArrowUpRight
            style={{ fontSize: 16, color: "yellow",marginLeft:5,marginTop:4}}
          />
              </Link>
            </Box>
          </Flex>

          <Flex
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            pb={12}
          >
            <Box p={12}>
              <Text textColor={"yellow"}>Feature3</Text>
              <Text
                fontWeight={"bold"}
                py={4}
                fontSize={{ base: "32px", md: "50px" }}
              >
                Write Blog Posts, Stories, & Even Books With GenAI.
              </Text>
              <Text pb={4}>
                To create powerful content, you need to know who you're
                targeting. Identify your target audience and understand their
                needs, interests, and pain points.
              </Text>
              <Text pb={2}>
                Start creating powerful content, for your next ads
              </Text>
              <Text pb={2}>
                Let's Communicate with your customers with emotions
              </Text>
              <Text>
                Use visuals like images, videos, or infographics to make your
                content more engaging
              </Text>
              <Link href="#" display={'flex'}  pt={4}  _hover={{ textDecoration: 'underline',fontWeight:'bold' }}>
                <Text  textColor={"yellow"}>
                  Get Started Free 
                </Text>  <HiOutlineArrowUpRight
            style={{ fontSize: 16, color: "yellow",marginLeft:5,marginTop:4}}
          />
              </Link>
            </Box>
            <Box>
              <Image width={1000} height={1000} src="/fea3.svg" alt="" />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Features;
