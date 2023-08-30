import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import Hellsmate from '@/components/ProjectCard/Hellsmate';
import NextBooking from '@/components/ProjectCard/NextBooking';
import { LineGraySmall } from '@/components/layout/Line';
import CheckMyTone from '@/components/ProjectCard/CheckMyTone';
import KHULazyBed from '@/components/ProjectCard/KHULazyBed';
import ARRoute from '@/components/ProjectCard/ARRoute';

function project() {
  const hells_imgList = [
    'https://github.com/eunnho98/eunnho/blob/main/public/hellsmate/1.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/hellsmate/2.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/hellsmate/3.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/hellsmate/4.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/hellsmate/5.PNG?raw=true',
  ];

  const booking_imgList = [
    'https://github.com/eunnho98/eunnho/blob/main/public/booking/1.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/booking/2.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/booking/3.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/booking/4.PNG?raw=true',
  ];

  const AR_imgList = [
    'https://github.com/eunnho98/eunnho/blob/main/public/AR/1.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/AR/2.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/AR/3.PNG?raw=true',
  ];

  const bed_imgList = [
    'https://github.com/eunnho98/eunnho/blob/main/public/KHULazy/1.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/KHULazy/2.PNG?raw=true',
    'https://github.com/eunnho98/eunnho/blob/main/public/KHULazy/3.PNG?raw=true',
  ];

  const myTone_imgList =
    'https://github.com/eunnho98/eunnho/blob/main/public/myTone/1.PNG?raw=true';
  return (
    <Box mx="24px">
      <Title title="Project" caption="" />
      <Hellsmate imgList={hells_imgList} title="Hellsmate" />
      <LineGraySmall w="100%" my="36px" />
      <NextBooking imgList={booking_imgList} title="Next Booking" />
      <LineGraySmall w="100%" my="36px" />
      <CheckMyTone imgList={myTone_imgList} title="Check My Tone" />
      <LineGraySmall w="100%" my="36px" />
      <KHULazyBed imgList={bed_imgList} title="KHU-Lazy Bed" />
      <LineGraySmall w="100%" my="36px" />
      <ARRoute imgList={AR_imgList} title="YoKHURoute" />
    </Box>
  );
}

export default project;
