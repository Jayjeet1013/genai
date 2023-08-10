import { Box, Container, Text ,Flex,Link,Button,Image} from '@chakra-ui/react'
import React from 'react'



const Nav = () => {
  return (
    <Box bg={'#1a1d24'}  position="fixed" zIndex={100} width="100%">
   <Container maxW={1300}>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="5px"
      px={2}
      color="white"
      >

<Link   href="/"  
            pt={4}
            
            width={{ base: "108px", md: "160px" }}
            height={{ base: "61px", md: "73px" }}> 
   <Image src='/logo.svg' alt='logo of genai'/>
   
</Link>


 
 <Flex color={'white'}  alignItems="center" gap={10}     display={{ base: "none", md: "flex" }}>
  <Link> <Text _hover={{color:'yellow',fontWeight:'bold'}}>Home</Text></Link>
  <Link><Text  _hover={{color:'yellow',fontWeight:'bold'}}>Pages</Text></Link> 
  <Link><Text  _hover={{color:'yellow',fontWeight:'bold'}}>Use cases</Text></Link>
  <Link><Text  _hover={{color:'yellow',fontWeight:'bold'}}>Pricing</Text></Link>
  <Link><Text  _hover={{color:'yellow',fontWeight:'bold'}}>Contact</Text></Link>
  <Link><Text  _hover={{color:'yellow',fontWeight:'bold'}}>Login</Text></Link>

  <Box color={'yellow.800'}>
    <Button p={2} color='yellow'  _hover={{bgColor:"yellow",color:'black'}} border={'2px solid yellow'}  bgColor={'transparent'}>Get Started</Button>
  </Box>
 </Flex>
    </Flex>
   </Container>
   </Box>
  )
}

export default Nav