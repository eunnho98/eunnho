import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';

const theme = extendTheme({
  styles: {
    global: (props) => ({
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        padding: 0,
        margin: 0,
        bg: props.colorMode === 'light' ? 'gray.100' : 'gray.700',
      },
    }),
  },
  fonts: {
    heading: ` 'Noto Sans KR', sans-serif`,
    body: ` 'Noto Sans KR', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const bg = useColorModeValue('gray.300', 'gray.900');
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <ChakraProvider theme={theme}>
        <Box w="100%" bgColor="gray.800" position="sticky" top="0" zIndex="100">
          <Header />
        </Box>
        <Flex flexDirection="column" minH="100vh">
          <Flex flexGrow={1} maxW="774px" m="0 auto">
            <Component {...pageProps} />
          </Flex>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

/** TODO
 *  프로젝트 정리
 *  본격적으로 포스팅
 */
