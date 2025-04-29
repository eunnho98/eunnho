import { Box } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import KCSE from '@/components/PaperCard/KCSE';
import { LineGraySmall } from '@/components/layout/Line';
import Access from '@/components/PaperCard/IEEE_Access';

function posts() {
  return (
    <Box mx="24px" w="100%">
      <Title title="Paper" caption="" />
      <Access />
      <LineGraySmall w="100%" my="36px" />
      <KCSE />
      <LineGraySmall w="100%" my="36px" />
    </Box>
  );
}

export default posts;
