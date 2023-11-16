import { useBreakpointValue, Grid, GridItem, Link, Image, HStack, Flex, Text, VStack, FormControl, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal } from "@chakra-ui/react"
import { ModalMenu } from "./Modal";
import { BiMailSend } from "react-icons/bi";
import { NavItem } from "./NavItem";
import { useEffect, useState } from "react";
import { CaretDown } from "phosphor-react";
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { Link as Slink } from 'react-scroll'

import { useRouter } from "next/router";

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;
const scroller = Scroll.scroller;


interface NavbarProps {
   serviceOn: boolean,
   backPage?(): any
}

export function Navbar({ serviceOn, backPage }: NavbarProps) {

   const [whatsNumber, setWhatsNumber] = useState('5511930003574')
   const { isOpen, onOpen, onClose } = useDisclosure()
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
            query: {
               name: name,
               number: number
            }
         })
      }
      return
   }


   // useEffect(() => {
   //    const fetchWhatsNumber = async () => {
   //       await fetch('/api/random', {method:'get'})
   //       .then(response => response.json())
   //       .then(data => {
   //          setWhatsNumber(data.number)
   //          console.log(whatsNumber)
   //       })
   //    }
   //    fetchWhatsNumber()
   // }, [])

   const isMobile = useBreakpointValue({
      base: true,
      sm: true,
      md: true,
      lg: false,
      xl: false
   })

   const homeOffset = useBreakpointValue({ base: 0, sm: 0, md: 0, lg: 0, xl: 0 })
   const quemSomosOffset = useBreakpointValue({ base: 700, sm: 700, md: 700, lg: 700, xl: 700 })
   const feedbacksOffset = useBreakpointValue({ base: 1700, sm: 1400, md: 1400, lg: 1340, xl: 1260 })
   const namidiaOffset = useBreakpointValue({ base: 2400, sm: 2000, md: 2000, lg: 1940, xl: 1760 })
   const contatoOffset = useBreakpointValue({ base: 100, sm: 100, md: 100, lg: 50, xl: 50 })

   const nationalityOffset = useBreakpointValue({ base: -100, sm: -100, md: -100, lg: 2550, xl: 2350 })
   const visaOffset = useBreakpointValue({ base: -100, sm: -100, md: -100, lg: 3200, xl: 3000 })

   const navItems = [
      // {id:'#Home', text:'Home', active:'active', offSet:homeOffset},
      // {id:'#quemSomos', text:'Quem somos', offSet:quemSomosOffset},
      // {id:'#services', text:'Serviços'},
      // {id:'#Oportunity', text:'Oportunidade', offSet:feedbacksOffset},
      // {id:'#Hurry', text:'Não deixe para depois', offSet:namidiaOffset},
      // {id:'#contato', text:'Necessidade', offSet:contatoOffset}
   ]

   let socialMediaLinks = [
      { id: "instagram", instagram: 'https://www.instagram.com/clubedopassaporte/' },
      { id: "facebook", facebook: 'https://www.facebook.com/teste' },
      { id: "linkedin", linkedin: 'https://www.linkedin.com/company/teste/' },
      { id: "whatsapp", whatsapp: `https://wa.me/${whatsNumber}?text=Olá, tudo bem? Acessei o site do Clube do Passaporte e gostaria de mais informações!` },
   ]

   const services = [
      { id: '#visa', name: 'Vistos', offset: visaOffset },
      { id: '#nationality', name: 'Cidadania via direta', offset: nationalityOffset },
      { id: '#nationality', name: 'Cidadania via sefardita', offset: nationalityOffset },
   ]

   function handleNavbarScrollService(offset) {
      backPage()
      scroll.scrollTo(offset, {
         duration: 1000,
         smooth: true,
      })
   }

   return (
      <>
         <Flex id='#navbar' w='100%' zIndex={1}>
            <Grid
               p={4}
               position='relative'
               bgColor='transparent'
               templateColumns={['', '', '', 'repeat(12,1fr)', 'repeat(12,1fr)']}
               w='100%'
               fontFamily='Heebo'
               fontWeight='300'
               textAlign='center'
               alignItems='center'
               color='white'
            >

               <GridItem mr={['auto', '', '', '', 'auto']} ml={[6, 6, 12, 12]} colStart={[0, 0, 1, 1, 1]} colEnd={[0, 0, 3, 3, 3]}>

                  {/* LOGO */}
                  <Link href='/' _hover={{ textDecoration: 'none' }}>
                     <HStack alignItems='center'>
                        <Image mx='auto' src='static/img/logo branco.png' maxW={10} alt='Logo do Clube do Passaporte' />
                        <VStack spacing={-2} textTransform='uppercase'>
                           <Text fontSize='0.8rem' fontWeight='400' mr='auto' color='white' textShadow='1px 1px 1px #00000050'> Clube do</Text>
                           <Text fontSize='1rem' fontWeight='400' color='clubAqua' textShadow='1px 1px 1px #00000050'> Passaporte</Text>
                        </VStack>
                     </HStack>
                  </Link>
               </GridItem>

               {isMobile ?
                  <ModalMenu key={navItems} serviceOn={serviceOn} backPage={backPage} mediaLinks={socialMediaLinks} navItems={navItems} />
                  :
                  <>
                     <GridItem colStart={[3, 3, 3, 3, 3]} mt={4} colEnd={[10, 10, 10, 11, 11]} >
                        <HStack justifyContent='center' spacing={[0, 0, 0, 4, 16]} textTransform='uppercase' fontSize={'0.9rem'}>
                           {navItems.map(item => {
                              if (item.id == '#services') {
                                 return (
                                    <Menu isOpen={isOpen} key={item.id}>
                                       <MenuButton
                                          textTransform='uppercase'
                                          mx={1}
                                          borderRadius={1}
                                          aria-label="Courses"
                                          fontWeight="normal"
                                          onMouseEnter={onOpen}
                                          onMouseLeave={onClose}
                                       >
                                          <Flex justify='center' align='center' gap={1} >
                                             <Text display='inline' fontWeight={300}>
                                                {item.text}
                                             </Text>
                                             {isOpen ? <CaretDown color='#4ca7a1' /> : <CaretDown />}
                                          </Flex>

                                       </MenuButton>

                                       <MenuList bg='clubBlack' borderRadius={1} borderColor='clubMaldivas' onMouseEnter={onOpen} onMouseLeave={onClose} textTransform='uppercase'>

                                          {services.map(item => {
                                             return (
                                                <MenuItem fontWeight={300} fontSize='0.8rem' letterSpacing={0.5} color='white' key={item.id} textTransform='uppercase' _hover={{ bg: 'clubCigar' }}>

                                                   {serviceOn == true ?
                                                      <Slink to={item.id} spy={true} smooth={true} offset={-60} duration={500}>
                                                         <Flex _hover={{ color: 'white' }}>
                                                            <Flex w='2px' bg='clubMaldivas' mr={2} display='inline'></Flex>
                                                            <Text display='inline'> {item.name} </Text>
                                                         </Flex>
                                                      </Slink>
                                                      :
                                                      <Slink onClick={() => { handleNavbarScrollService(item.offset) }}>
                                                         <Flex _hover={{ color: 'white' }}>
                                                            <Flex w='2px' bg='clubMaldivas' mr={2} display='inline'></Flex>
                                                            <Text display='inline'> {item.name} </Text>
                                                         </Flex>
                                                      </Slink>
                                                   }

                                                </MenuItem>
                                             )
                                          })}
                                       </MenuList>
                                    </Menu>
                                 )
                              } else {
                                 return (
                                    <NavItem key={item.text} serviceOn={serviceOn} backPage={backPage} id={item.id} text={item.text}
                                       activeClass={item.active} offSet={item.offSet} />
                                 )
                              }
                           })}

                        </HStack>
                     </GridItem>

                     <GridItem colStart={[10, 10, 10, 11, 11]} colEnd={13} pt={4}>
                        <HStack justifyContent='center' alignItems='baseline' spacing={2} fontSize='2rem' color='clubAqua'>
                           {/* <Link _hover={{color: "clubAquaClean"}} target="_blank" href={socialMediaLinks[0].instagram}> <BsInstagram /> </Link> */}

                           <Slink to="#contato" spy={true} smooth={true} offset={0} duration={1500}>
                              <Flex color='clubMaldivas' _hover={{ cursor: 'pointer', color: 'white', transition: '400ms' }}>
                                 <BiMailSend />
                              </Flex>
                           </Slink>

                        </HStack>
                     </GridItem>
                  </>
               }
            </Grid>
         </Flex>


      </>

   )
}
