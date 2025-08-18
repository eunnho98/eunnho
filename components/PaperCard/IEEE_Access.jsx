import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import Badge from '../Badge';

function Access() {
  const title =
    'An Empirical Study of User Playback Interactions and Engagement in Mobile Video Viewing';

  const [isMdOrSmaller] = useMediaQuery('(max-width: 800px)');

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <HStack py="6px">
        <Badge type="conf" name="IEEE Access" link="http://eunnho.vercel.app" />
        <Badge type="pdf" name="PDF" link="/pdf/access.pdf" />
      </HStack>
      <Text as="i">2025. IEEE Access</Text>
      <Text>
        <Text as="span" fontWeight="bold">
          Eunnho Kim
        </Text>
        , Seungjae Oh, Sangkeun Park
      </Text>
      {isMdOrSmaller ? (
        <VStack mt="12px">
          <Image
            w="120"
            h="240px"
            src="https://github.com/eunnho98/eunnho/blob/main/public/Access/1.png?raw=true"
            borderRadius="6px"
          />
          <Text fontSize="14px" mt="12px">
            This study investigated how mobile video viewing behaviors, such as
            skipping and adjusting playback speed, relate to user engagement and
            satisfaction. Based on data from 25 participants, the research found
            that different types of skips have distinct meanings: scrubbing
            often leads to video abandonment, while backward skips may indicate
            deeper engagement. Adjusting playback speed was also shown to
            signify a user's deeper involvement. The study notably revealed that
            video abandonment does not always mean dissatisfaction, as some
            users left after achieving their viewing goals. These insights
            suggest that analyzing users' playback interactions can serve as a
            valuable indicator of engagement, which can then be used to improve
            video recommendation systems.
          </Text>
        </VStack>
      ) : (
        <HStack w="100%" gap="12" mt="8px">
          <Image
            w="250px"
            h="200px"
            src="https://github.com/eunnho98/eunnho/blob/main/public/Access/1.png?raw=true"
            borderRadius="6px"
            flex="1"
          />
          <Text flex="2" fontSize="14px">
            This study investigated how mobile video viewing behaviors, such as
            skipping and adjusting playback speed, relate to user engagement and
            satisfaction. Based on data from 25 participants, the research found
            that different types of skips have distinct meanings: scrubbing
            often leads to video abandonment, while backward skips may indicate
            deeper engagement. Adjusting playback speed was also shown to
            signify a user's deeper involvement. The study notably revealed that
            video abandonment does not always mean dissatisfaction, as some
            users left after achieving their viewing goals. These insights
            suggest that analyzing users' playback interactions can serve as a
            valuable indicator of engagement, which can then be used to improve
            video recommendation systems.
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default Access;
