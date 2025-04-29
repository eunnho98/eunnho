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
            Mobile video viewing on popular platforms such as YouTube and
            Netflix is widespread, yet the role of specific viewing interactions
            in shaping user engagement remains underexamined. This study
            investigates how skipping behaviors (including their types and
            directions) and playback speed adjustments relate to user
            engagement, with a focus on video abandonment and user satisfaction.
            We developed a custom mobile web application for video viewing and
            collected viewing logs and self-reports from 25 participants during
            two 10-day field studies. Our findings reveal that different skip
            types and directions are associated with distinct engagement
            outcomes. For example, scrubbing often correlates with higher
            abandonment, whereas backward skips may indicate greater engagement.
            Playback speed adjustments can signify deeper involvement, allowing
            users to tailor their viewing speeds without missing key content.
            Notably, video abandonment did not always equate with
            dissatisfaction; some users left after meeting their immediate
            viewing goals. These insights suggest that users’ playback
            interactions may serve as indicators of user engagement and can be
            incorporated into video recommendation systems to enhance user
            satisfaction. We conclude by discussing the design implications of
            enhancing user satisfaction.
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
            Mobile video viewing on popular platforms such as YouTube and
            Netflix is widespread, yet the role of specific viewing interactions
            in shaping user engagement remains underexamined. This study
            investigates how skipping behaviors (including their types and
            directions) and playback speed adjustments relate to user
            engagement, with a focus on video abandonment and user satisfaction.
            We developed a custom mobile web application for video viewing and
            collected viewing logs and self-reports from 25 participants during
            two 10-day field studies. Our findings reveal that different skip
            types and directions are associated with distinct engagement
            outcomes. For example, scrubbing often correlates with higher
            abandonment, whereas backward skips may indicate greater engagement.
            Playback speed adjustments can signify deeper involvement, allowing
            users to tailor their viewing speeds without missing key content.
            Notably, video abandonment did not always equate with
            dissatisfaction; some users left after meeting their immediate
            viewing goals. These insights suggest that users’ playback
            interactions may serve as indicators of user engagement and can be
            incorporated into video recommendation systems to enhance user
            satisfaction. We conclude by discussing the design implications of
            enhancing user satisfaction.
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default Access;
