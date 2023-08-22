import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
import Script from 'next/script'



const FB_PIXEL_ID = '700239298517091'

function MyApp({Component, pageProps}: AppProps) {
   const router = useRouter()
   useEffect(() => {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init(`${FB_PIXEL_ID}`)
          ReactPixel.pageView()
  
          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
    }, [router.events])
   return (
      <>
         {/* <!-- Meta Facebook --> */}
         {/* <!-- Google Tag Manager --> */}
         {/*
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGLDLST');
         */}
         <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html:
            `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TGLDLST');
            `}}>
         </Script>
         {/* <!-- End Google Tag Manager --> */}

         <ChakraProvider theme={theme}>
            <Global
               styles={`...`}
            />
            <Component {...pageProps} />
         </ChakraProvider>
      </>
   )
}

export default MyApp
