import { FacebookIcon, GithubIcon, GmailIcon, InstagramIcon } from '@/icons';
import { Box, HStack, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  return (
    <VStack
      w="100%"
      bgColor={bgColor}
      h="250px"
      position="relative"
      transform="translateY(100%)"
      textAlign="center"
      justify="center"
      spacing={6}
    >
      <HStack justify="space-evenly" w="30%">
        <a href="https://github.com/eunnho98" target="_blank" title="github">
          <GithubIcon
            fontSize="4xl"
            display="block"
            _hover={{
              transform: 'scale(1.2)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'linear',
            }}
          />
        </a>
        <a href="mailto:taemin4u@gmail.com" title="taemin4u@gmail.com">
          <GmailIcon
            fontSize="4xl"
            display="block"
            _hover={{
              transform: 'scale(1.2)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'linear',
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/si1verboat/"
          target="_blank"
          title="instagram"
        >
          <InstagramIcon
            fontSize="4xl"
            display="block"
            _hover={{
              transform: 'scale(1.2)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'linear',
            }}
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100007343054323"
          target="_blank"
          title="facebook"
        >
          <FacebookIcon
            fontSize="4xl"
            display="block"
            _hover={{
              transform: 'scale(1.2)',
              transitionDuration: '0.2s',
              transitionTimingFunction: 'linear',
            }}
          />
        </a>
      </HStack>
      <Text fontSize="2xl" fontWeight="bold">
        Copyright © 2023, All right reserved.
      </Text>
      <Text fontSize="xl" fontWeight="semibold">
        Built with NextJS
      </Text>
    </VStack>
  );
}

export default Footer;
