import React from 'react';
import { HStack, Avatar, VStack, Text, Box } from '@chakra-ui/react';
function Profile() {
  return (
    <Box m="50px auto">
      <HStack gap={3}>
        <Avatar size="2xl" src="img.jpg" border="4px solid black" zIndex={-1} />
        <VStack>
          <Text fontSize="xl">
            Hello, I am a masters student at the UXC Lab in the Department of
            Software Convergence at KyungHee University.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Profile;
