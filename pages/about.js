import {
  Box,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Title from '@/components/Title';
import { LineGraySmall } from '@/components/layout/Line';
import Link from 'next/link';

function about() {
  return (
    <Box mx="24px">
      <Title title="About" caption="" />
    </Box>
  );
}

export default about;
