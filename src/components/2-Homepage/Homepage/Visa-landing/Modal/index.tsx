import { Flex, Collapse, Text, Box, VStack, Heading, useBreakpointValue } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ArrowRight, X, XCircle, XSquare } from "phosphor-react";


interface VisaModalProps {
    isOpen:boolean,
    onClose:() => void,
    data?: {
        id?:string,
        name?:string,
        description?:ReactJSXElement,
        backgroundSource?:string
    }

}

export function VisaModal({isOpen, onClose, data}:VisaModalProps) {
    const isDesktop = useBreakpointValue({ base: false, sm:false, md:false, lg: true , xl: true});
    return (
        <Flex w={['100%','100%','100%','100%']} flexDir={'column'} my='auto'>

            { isOpen?
            <Collapse in={isOpen}  >
                    <Box
                        bgColor='clubDark'
                        bgSize={'cover'}
                        bgPosition={'center'}
                        color='white'
                        shadow='md'
                    >
                        <VStack p={[4,4,4,4,4]} position='relative' >
                            <Flex 
                            position='absolute' top='1' right='1'
                            color={'#1c928b'} 
                            cursor='pointer' 
                            _hover={{color:'red.500', transition:'400ms'}}
                            onClick={onClose}
                            >
        
                            <XCircle size={20}  weight="regular"/>
        
                            </Flex>
                            <VStack my='auto'>
                                <Text fontSize='1.1rem' bg='clubAqua' p={5} w='100%' color='salt' textAlign='center'>
                                {data.name}
                                </Text>
        
                                <Flex h='100%' p={4}>
                                    <Text>
                                        {data.description}
                                    </Text>
                                </Flex>
                            </VStack>
        
                        </VStack>
                    </Box>
            </Collapse >
            :
            <Flex my='auto' color='white' fontWeight={200} justifyContent='center'>
                <Flex alignItems={'center'} gap={4}>
                    <Heading fontWeight={200}>
                        Selecione seu visto
                    </Heading>
                    <ArrowRight size={48} color="#4ca7a1" weight="thin" />
                </Flex>
            </Flex>
            }
        </Flex>
    )
}