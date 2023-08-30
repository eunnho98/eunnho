import Title from '@/components/Title';
import Post from '@/components/Post';
import Profile from '@/components/Profile';
import { LineGraySmall } from '@/components/layout/Line';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <Box mx="24px">
      <Title title="Eunnho Kim" caption="" />
      <Profile />
      <Box mt="50px">
        <Text fontSize="4xl" fontWeight="bold">
          Recent Post
        </Text>
        <LineGraySmall mt="15px" />
        <Post category="Category" title="Title" caption="Update coming soon" />
        <Post category="Category" title="Title" caption="Update coming soon" />
        <Post category="Category" title="Title" caption="Update coming soon" />
      </Box>

      <Link href="/posts">
        <Button
          colorScheme="facebook"
          w="220px"
          h="50px"
          fontSize="xl"
          display="block"
          margin="0 auto"
          mt="32px"
          isDisabled="true"
        >
          More Post
        </Button>
      </Link>
    </Box>
  );
}

export default index;
