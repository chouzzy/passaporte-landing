import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  
   fonts: {
      heading: 'Avenir, Heebo ',
      body:'Avenir, Heebo'
   },
   colors: {
     clubAqua:"#1d968f",
     clubAquaClean:"#7cc3bb",
     clubDark:'#343434',
     clubBlack:'#202020',
     clubMoss:"#356561",
     clubCigar:"#637776",
     clubMaldivas:"#4ca7a1",
     clubDarkBlue:'#0f1d27',
     whatsapp:'#25d366',
   },
   styles: {
     global: {
       // styles for the `body`
        body: {
          bgRepeat:'no-repeat',
          bgSize:'100%',
          bgAttachment:'fixed',
          color: 'gray.900',
          
        },
       // styles for the `a`
        a: {
          // color: 'teal.500',
          _hover: {
            textDecoration: 'none',
          },
        },
     },
   },
 })