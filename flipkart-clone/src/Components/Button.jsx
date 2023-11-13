'use client'

import { Button, Flex } from '@chakra-ui/react'

export default function ButtonChakra() {
  return (
    <Flex h="20vh" justifyContent="center" alignItems="center">
      <Button
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'#4299e1'}
        border={"none"}
        height={"30px"}
        fontWeight={"500"}
        color={'white'}
        textTransform={"uppercase"}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          cursor:"pointer",
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
        Add To Cart
      </Button>
    </Flex>
  )
}