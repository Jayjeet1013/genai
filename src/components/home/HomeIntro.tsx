import { Container ,Box,Text,Button,Link,List,ListItem} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'


const HomeIntro = () => {
  return (
  <Box bg={'blue.900'} textColor={'white'}>
    <Container maxW={1300} >
      <Box pt={32} pb={10}>
    <Box
      
      display="grid"
      gridTemplateColumns={{ base: '1fr', md: '1fr' }}
      gap={{ base: 4, md: 8 }}
      textAlign={{ base: 'center', md: 'center' }}
      px={{ base: 4, md: 8 }}
    >
      <Box>
        <Text fontSize={{ base: 'lg', md: '2lg' }} textColor={'yellow'}>
          Best AI Copywriting Tool
        </Text>
        <Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight={'bold'} textColor={'white'}>
          A 10X Faster Way To Write Your
        </Text>
      </Box>

      <Box pb={6} fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" textColor={'white'}>
     <Text>Animation</Text>
      </Box>

   
    </Box> 
    <Box textAlign="center" >
        <Button
         
          my={4}
          width={{ base: '220px', md: '260px' }}
          fontSize={{base:'14px',md:'18px'}}
          size="lg"
          textColor={'white'}
          bg={'pink.500'}
          marginLeft={{ base: 'auto', md: 'auto' }} // Adjust the marginLeft here to center the button
        >
          Start Writing - It's Free
        </Button>
      </Box>

      <Box display={'flex'} justifyContent="center" alignItems="center" py={8}> 
  <Box
        border="3px solid  yellow" 
        borderRadius={30}
        overflow={'hidden'}
        
      >
        <Image
          width={1000}
          height={1000}
          src="/screen-1.jpg"
          alt=""
          objectFit="cover" 
        />
      </Box>
</Box>

       <Box>
      <List gap={6} py={4} justifyContent={'center'}  display="flex" flexDirection="row" >
        <ListItem>&#8226; Write BLogs 10X Faster</ListItem>
        <ListItem>&#8226; Write Higher Converting Posts</ListItem>
        <ListItem>&#8226; Write More Engaging Emails</ListItem>
      </List>
     </Box>



      </Box>
    </Container>
    </Box>
  )
}

export default HomeIntro