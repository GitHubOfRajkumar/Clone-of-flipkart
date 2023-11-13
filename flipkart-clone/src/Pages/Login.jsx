import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   InputGroup,
   HStack,
   InputRightElement,
   Stack,
   Button,
   Heading,
   Text,
   useColorModeValue,
   Link,
 } from '@chakra-ui/react';
 import { useState } from 'react';
 import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
 import "../Css/Login.css"
import { useNavigate } from 'react-router-dom';
 export default function Login() {
   const [showPassword, setShowPassword] = useState(false);

   const navigate = useNavigate()
const console1 = ()=>{
  navigate("/register")
}

   return (
      <div className='div' style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>

      

      <div className='bigimage'>
         <img className='image' src="https://st2.depositphotos.com/4763221/42030/i/600/depositphotos_420303190-stock-photo-tula-russia-september-08-2020.jpg" alt="" />
      </div>
      <div className='primary2'>
        
      <div style={{position:"relative",bottom:"80px"}}>

      <div style={{display:"flex",position:"relative",top:"120px",width:"140px",left:"80px"}}>

<img style={{width:"140px"}} src='data:image/png;base64,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'/>
</div>

     <Flex 
       minH={'70vh'}
      //  style={{backgroundColor:"aqua"}}
       align={'center'}
       justify={'center'}
       bg={useColorModeValue('gray.50', 'gray.800')}>
        
       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
         <Stack align={'center'}>
           <Heading className='Size' textAlign={'center'}>
             Sign up
           </Heading>
           <Text className='Size2' fontSize={'lg'} color={'gray.600'}>
             to enjoy all of our cool features ✌️
           </Text>
         </Stack>
         <div className='Primary'>

         
         <Box 
           rounded={'lg'}
           bg={useColorModeValue('white', 'gray.700')}
           boxShadow={'lg'}
           p={8}>
           <Stack spacing={4}>
             <HStack>
               <Box>
                 <FormControl id="firstName" isRequired>
                   <FormLabel className='Name'>First Name</FormLabel>
                   <Input className='input' type="text" />
                 </FormControl>
               </Box>
               <Box>
                 <FormControl id="lastName">
                   <FormLabel className='Name'>Last Name</FormLabel>
                   <Input className='input' type="text" />
                 </FormControl>
               </Box>
             </HStack>
             <FormControl id="email" isRequired>
               <FormLabel className='Name'>Email address</FormLabel>
               <Input className='input2' type="email" />
             </FormControl>
             <FormControl id="password" isRequired>
               <FormLabel className='Name'>Password</FormLabel>
               <InputGroup>
                 <Input className='input2' type={showPassword ? 'text' : 'password'} />
                 <InputRightElement h={'full'}>
                   <Button autoFocus
                     variant={'ghost'}
                     onClick={() =>
                       setShowPassword((showPassword) => !showPassword)
                     }>
                     {showPassword ? <ViewIcon  viewBox='0 0 24 24' className='icon' p={"2.5px"} boxSize={35}/> : <ViewOffIcon  boxSize={35} p={"2.5px"} className='icon'/>}
                   </Button>
                 </InputRightElement>
               </InputGroup>
             </FormControl>
             <Stack spacing={10} pt={2}>
               <Button className="button"
                 loadingText="Submitting"
                 size="lg"
                 bg={'blue.400'}
                 color={'white'}
                 _hover={{
                   bg: 'blue.500',
                 }}>
                 Sign up
               </Button>
             </Stack>
             <Stack pt={6}>
               <Text align={'center'} className='Name3'>
                 Already a user? <Link onClick={console1} to="/register" className='Name2' color={'blue.400'}>Login</Link>
               </Text>
             </Stack>
           </Stack>
         </Box>
       </div>
       </Stack>
     </Flex>
     </div>
     </div>
     </div>
   );
 }