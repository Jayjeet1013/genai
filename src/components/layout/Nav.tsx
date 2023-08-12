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
            
            width={"160px" }
            height={ "73px" }> 
   <Image src='/logo.svg' alt='logo of genai'/>
   
</Link>


 
 <Flex color={'white'}  alignItems="center" gap={10}    justifyContent="center"  display={{ base: "none", md: "flex" }}>
  <Link _hover={{color:'yellow',textDecoration:'none'}} > <Text >Home</Text></Link>
  <Link _hover={{color:'yellow',textDecoration:'none'}}  ><Text >Pages</Text></Link> 
  <Link _hover={{color:'yellow',textDecoration:'none'}}  ><Text >Use cases</Text></Link>
  <Link _hover={{color:'yellow',textDecoration:'none'}}   ><Text >Pricing</Text></Link>
  <Link _hover={{color:'yellow',textDecoration:'none'}}  ><Text>Contact</Text></Link>
  <Link _hover={{color:'yellow',textDecoration:'none'}}><Text>Login</Text></Link>

  <Box color={'yellow.800'}>
    <Button p={6} color='yellow'  _hover={{bgColor:"yellow",color:'black'}} border={'2px solid yellow'}  bgColor={'transparent'}>Get Started</Button>
  </Box>
 </Flex>
    </Flex>
   </Container>
   </Box>
  )
}

export default Nav