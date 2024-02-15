import { Box } from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import KCSE from '@/components/PaperCard/KCSE';
import { LineGraySmall } from '@/components/layout/Line';

function posts() {
  return (
    <Box mx="24px">
      <Title title="Paper" caption="" />
      <KCSE />
      <LineGraySmall w="100%" my="36px" />
    </Box>
  );
}

export default posts;
