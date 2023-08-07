import { Container ,Box,Text,Button,Link,List,ListItem} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'


const HomeIntro = () => {
  return (
  <Box bg={'#1a1d24'} textColor={'white'}>
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
    <Box textAlign="center" py={4} >
        <Button
         
         _hover={{textColor:'white',bg:'linear(to-r, darkviolet, red)'}}
          width={{ base: '210px', md: '240px' }}
          borderRadius={12}
          fontSize={{base:'14px',md:'18px'}}
          size="lg"
          textColor={'white'}
          bgGradient="linear(to-r, darkviolet, red.400)" 

        >
          Start Writing - It&apos;s Free
        </Button>
      </Box>

      <Box display={'flex'} justifyContent="center" alignItems="center" py={8}> 
  <Box
        border="1px solid  yellow" 
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
      <List gap={6} py={4} justifyContent={'center'} alignItems={'center'} display="flex" flexDirection={{base:'column',md:'row'}} >
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