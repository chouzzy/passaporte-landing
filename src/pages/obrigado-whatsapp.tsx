import { Button, Container, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";


export default function Contact() {

  const router = useRouter()

  return (
    <Container
      id='#Home'
      maxW='100vw'
      h='100vh'
      bgImage='static/img/bg-landing.png'
      bgPos={'center'}
      bgSize='cover'
      bgColor='clubDark'
      p='0' m='0'
      centerContent
    >
      <Flex
        flexDirection={'column'}
        justifyContent='center'
        align={'center'}
        gap={4}
        my={'auto'}
        maxW={['80vw', '80vw', '80vw']}
      >
        <Image src='static/img/logo branco.png' alt="logo" maxW={32} />

        <Heading color='gray.50' fontWeight={'300'} textAlign='center'>
          Ficamos felizes pelo seu interesse!
        </Heading>

      </Flex>
    </Container>
  )
}
