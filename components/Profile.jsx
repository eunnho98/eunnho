import React, { useState } from 'react';
import { HStack, Avatar, VStack, Text, Box } from '@chakra-ui/react';
import { FacebookIcon, GithubIcon, GmailIcon, InstagramIcon } from '@/icons';
function Profile() {
  return (
    <Box m="50px auto">
      <HStack gap={3}>
        <Avatar size="2xl" src="img.jpg" border="4px solid black" zIndex={-1} />
        <VStack>
          <Text fontSize="xl">
            Hello, I am an undergraduate research student at the UXC Lab in the
            Department of Software Convergence at KyungHee University.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Profile;
