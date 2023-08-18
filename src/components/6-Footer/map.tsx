import { Flex, HStack, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";


export function Map() {

    const iframeHeight = useBreakpointValue({ base: '400px', sm: '254px', md: '480px', lg: '480px', xl: '400' })
    const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false })

    return (
        <Flex w='100%' justifyContent={'space-between'} py={[8, 8, 16, 12]} px={[8, 8, 16, 16]} flexDir='column-reverse' >

            {isMobile ?
                ''
                :
                <Flex alignItems={'center'} justifyContent='center' pt={6} >
                    <HStack mx='auto' alignItems='center'>
                        <Image mx='auto' src='static/img/logo branco.png' maxW={10} alt='Logo do Clube do Passaporte' />
                        <VStack spacing={-2} textTransform='uppercase'>
                            <Text fontSize='0.8rem' fontWeight='400' mr='auto' color='white' textShadow='1px 1px 1px #00000050'> Clube do</Text>
                            <Text fontSize='1rem' fontWeight='400' color='clubAqua' textShadow='1px 1px 1px #00000050'> Passaporte</Text>
                        </VStack>
                    </HStack>
                </Flex>
            }


            <Flex flexDir='column' gap={4}>
                <iframe style={{ outline: '3px solid #4ca7a1 ' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0053203760676!2d-46.693426099999996!3d-23.5682524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a0a4f600bb%3A0x65fa01de00fe5914!2sR.%20Cl%C3%A1udio%20Soares%2C%2072%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005422-030!5e0!3m2!1spt-BR!2sbr!4v1689089147293!5m2!1spt-BR!2sbr" width="100%" height={iframeHeight} loading="lazy" />

                <VStack>
                    <Text>R. Cláudio Soares, 72 - Pinheiros, São Paulo - SP, 05422-030</Text>
                </VStack>
            </Flex>
        </Flex>

    )
}