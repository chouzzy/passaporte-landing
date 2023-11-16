import { Flex, Input, VStack, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, FormControl, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";


export default function WhatsButton() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [linkDisable, SetLinkDisable] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (name.length > 1 && number.length > 10) {
            SetLinkDisable(false)
        } else {
            SetLinkDisable(true)
        }
    }, [name, number])

    function RedirectContact(name, number) {

        if (typeof window !== "undefined") {
            router.push({
                pathname: "obrigado-whatsapp",
                query:{
                    name: name,
                    number: number
                }
            })
        }
        return
    }

    return (
        <>


            <Flex bg='#25D366' color="#fffafa"
                fontSize='1.8rem' borderRadius={'full'} p={4}
                position='fixed' bottom={8} right={8}
                _hover={{ transition: ' 400ms', fontSize: '2.4rem' }}
                cursor='pointer'>

                <Popover>
                    <PopoverTrigger>
                        <Flex>
                            <BsWhatsapp />
                        </Flex>
                    </PopoverTrigger>

                    <Portal>
                        <PopoverContent bg='#0f1d27' border='none' p={2} m={2} borderRadius={2}>
                            <PopoverArrow bg='#0f1d27' border='none' />
                            <PopoverCloseButton color='white' fontSize='0.9rem' p={6} _hover={{ color: 'clubMaldivas' }} />
                            <PopoverBody>

                                <VStack spacing={3}>

                                    <Flex color='white' fontWeight={400}>
                                        Por favor, preencha as seguintes informações:
                                    </Flex>

                                    <FormControl isRequired>
                                        <Input type='name' onChange={(e) => { setName(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='Nome' />
                                        <Input type='number' onChange={(e) => { setNumber(`${e.target.value}`) }} my={1} variant='outline' bg='white' placeholder='DDD + número, ex: 11999998888' />
                                    </FormControl>

                                    {
                                        linkDisable == true ?
                                            <Link
                                                // onClick={() => { RedirectContact(name, number) }}
                                                onClick={() => { RedirectContact(name, number) }}
                                                pointerEvents='none'
                                                target="_blank"
                                                _hover={{ textDecoration: 'none' }}>
                                                <Flex
                                                    bg='#25D366'
                                                    _hover={{ bg: 'clubMaldivas' }}
                                                    borderRadius={2}
                                                    gap={3}
                                                    p={2}
                                                    boxShadow='2px 2px 1px #000000bb'
                                                >
                                                    <Flex color='white'>Falar conosco </Flex>
                                                    <BsWhatsapp fontSize={'1.4rem'} color='white' />
                                                </Flex>
                                            </Link>
                                            :
                                            <Link
                                                // onClick={() => { RedirectContact(name, number) }}
                                                onClick={() => { RedirectContact(name, number) }}
                                                pointerEvents='auto'
                                                target="_blank"
                                                _hover={{ textDecoration: 'none' }}>
                                                <Flex
                                                    bg='#25D366'
                                                    _hover={{ bg: 'clubMaldivas' }}
                                                    borderRadius={2}
                                                    gap={3}
                                                    p={2}
                                                    boxShadow='2px 2px 1px #000000bb'
                                                >
                                                    <Flex color='white'>Falar conosco </Flex>
                                                    <BsWhatsapp fontSize={'1.4rem'} color='white' />
                                                </Flex>
                                            </Link>
                                    }
                                </VStack>

                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>

            </Flex>
        </>
    )
}
