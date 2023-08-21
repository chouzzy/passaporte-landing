import { Button, Center, Checkbox, CheckboxGroup, Divider, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { GiCommercialAirplane } from "react-icons/gi";
import { Map } from "./map";
import { checkBoxList, formData, title } from "./footerData";
import { useRouter } from "next/router";

export function Footer() {

   const [color, setColor] = useState('clubMaldivas')
   const [disable, setDisable] = useState(false)
   const [sentText, setSentText] = useState('Enviar')
   const [checkedItems, setCheckedItems] = useState([]);    // initialize state for checked items

   const handleCheckboxChange = (event) => {

      const targetValue = event.target.value;
      const isChecked = event.target.checked;

      if (isChecked) {
         setCheckedItems(prevState => [...prevState, targetValue]);
      } else {
         setCheckedItems(prevState => prevState.filter(item => item !== targetValue));
      }

   };

   const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
   } = useForm()

   const router = useRouter()

   function onSubmit(values) {
      setDisable(true)
      setColor('clubCigar')
      setSentText('Enviado ✔')
      const emailData = { ...values, checkedItems }

      return new Promise(() => {
         setTimeout(() => {
            fetch('/api/mail', {
               method: 'post',
               body: JSON.stringify(emailData)
            })
         }, 2000)

         if (typeof window !== "undefined") {
            router.push({
                pathname: "obrigado-whatsapp",
            })
        }
      })
   }

   return (
      <Flex
         id='#contato'
         w='100%'
         bg='#0f0f0f'
         color='gray.50'
         fontFamily='Heebo'
         bgRepeat='repeat-x'
         flexDir="column"
         justifyContent='center'
         py={8}
         px={2}
      >
         <Flex w='100%'>
            <Heading
               mx='auto'
               fontWeight='300'
               fontSize='1.8rem'
            >
               {title}
            </Heading>
         </Flex>

         <Flex w='100%' flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>

            {/* MAPA */}
            <Map />
            {/* FORM */}
            <Center my='auto' height={[0,0,0 , 600]}>
               <Divider orientation='vertical' />
            </Center>
            <Flex
               id='#formulario'
               w='100%'
               justifyContent='center'
               px={[8, 8, 16, 16]}
               py={[8, 8, 16, 12]}
            >
               <FormControl isRequired>

                  <form onSubmit={handleSubmit(onSubmit)}>

                     {/* NOME */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='first-name'
                     >
                        {formData.name}
                     </FormLabel>

                     <Input
                        p={2}
                        placeholder='Digite seu nome'
                        {...register("Nome")}
                     />

                     {/* TELEFONE */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='telephone'
                     >
                        {formData.number}
                     </FormLabel>

                     <InputGroup gap={1}>

                        {/* SELECT DDD ou DDI */}
                        <Select
                           isRequired
                           id='discagem'
                           w='300px'
                           _placeholder={{ color: 'black' }}
                           placeholder='Discagem'
                           {...register("discagem")}>
                           <option style={{ color: 'black' }}>DDD</option>
                           <option style={{ color: 'black' }}>DDI</option>
                        </Select>

                        {/* INPUT DO PREFIXO */}
                        <Input
                           isRequired={true}
                           type='tel'
                           w='180px'
                           minLength={2}
                           maxLength={3}
                           placeholder='DDD/DDI'
                           p={2}
                           {...register("prefixo")}
                        />

                        {/* INPUT DO NÚMERO */}
                        <Input
                           type='tel'
                           minLength={8}
                           maxLength={9}
                           placeholder='Ex: 912345678 ou 23456789'
                           {...register("Numero")}
                        />

                        {/* ICON DO TELEFONE */}
                        <InputRightElement pointerEvents='none'>
                           <BsTelephoneFill
                              fontSize='1.1rem'
                              color='gray'
                           />
                        </InputRightElement>

                     </InputGroup>

                     {/* EMAIL */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='e-mail'
                     >
                        {formData.email}
                     </FormLabel>

                     <InputGroup>

                        {/* INPUT DO EMAIL */}
                        <InputLeftElement pointerEvents='none'>
                           <IoIosMail fontSize='1.4rem' color='gray' />
                        </InputLeftElement>

                        <Input type='mail' placeholder='Digite seu e-mail' {...register("Email")} />
                     </InputGroup>

                     {/* MOVING DATE */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='e-mail'
                     >
                        {formData.movingDate}
                     </FormLabel>

                     <InputGroup>
                        <Select

                           isRequired
                           id='discagem'
                           w='100%'
                           _placeholder={{ color: 'black' }}
                           placeholder='Escolha o período aproximado'
                           {...register("MovingDate")}
                           >
                           <option style={{ color: 'black' }}>Próximos 3 meses</option>
                           <option style={{ color: 'black' }}>Próximos 6 meses</option>
                           <option style={{ color: 'black' }}>Próximo 1 ano </option>
                           <option style={{ color: 'black' }}>Mais de 1 ano </option>
                        </Select>
                     </InputGroup>

                     {/* SELECT OBJECTIVES */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='e-mail'
                     >
                        Qual das seguintes opções melhor descreve o seu objetivo em Portugal?
                     </FormLabel>

                     <InputGroup>
                        <CheckboxGroup
                           colorScheme='cyan'
                        >
                           <VStack
                              alignItems={'left'}
                              p={4}
                              spacing={[1, 5]}
                              direction={['column', 'row']}
                           >
                              {/* FORMULÁRIO CheckBox */}
                              {checkBoxList.map(checkBoxItem => {
                                 return (
                                    <Checkbox
                                       key={checkBoxItem}
                                       value={checkBoxItem}
                                       onChange={handleCheckboxChange}    // call onChange function
                                       isRequired={false}
                                       isChecked={checkedItems.includes(checkBoxItem)}    // set isChecked prop to reflect state
                                    >
                                       {checkBoxItem}
                                    </Checkbox>
                                 )
                              })}
                           </VStack>
                        </CheckboxGroup>
                     </InputGroup>

                     {/* MOVING REASON TEXT */}
                     <FormLabel
                        fontWeight='400'
                        pl={2}
                        pt={4}
                        mb={1}
                        htmlFor='e-mail'
                     >
                        {formData.movingReason}
                     </FormLabel>

                     <InputGroup>

                        <Textarea
                           bgColor='whiteAlpha.800'
                           color='gray.900'
                           placeholder='Digite aqui'
                           {...register("MovingReason")}
                        />

                     </InputGroup>

                     <Button
                        id='#submitButton'
                        borderRadius={3}
                        mt={8}
                        w='100%'
                        _hover={{
                           bg: 'clubCigar',
                           transition: '360ms'
                        }}
                        mx='auto'
                        cursor='pointer'
                        bg={color}
                        disabled={disable}
                        type='submit'
                        color='white'
                     >
                        {sentText}
                     </Button>
                  </form>
               </FormControl>
            </Flex>
         </Flex>
         <Flex w='100%'>
            <Flex display='inline' mx='auto' fontWeight='300' fontSize='0.7rem'>
               desenvolvido por
               <Link href='https://awer.co' target="_blank" color='#F55F5E' _hover={{ textDecoration: 'none', color: '#729EA1' }}>
                  <Text display='inline' > awer.co </Text>
               </Link>
            </Flex>
         </Flex>
      </Flex>
   )
}