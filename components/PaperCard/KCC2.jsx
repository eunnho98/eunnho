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

function KCSE() {
  const title = '개인화된 상향 비교 유발 콘텐츠 필터링 시스템 개발';

  const [isMdOrSmaller] = useMediaQuery('(max-width: 800px)');

  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <HStack py="6px">
        <Badge
          type="conf"
          name="KCC 2025"
          link="https://www.kiise.or.kr/conference/kcc/2025/"
        />
        <Badge type="pdf" name="PDF" link="/pdf/kcc2.pdf" />
      </HStack>
      <Text as="i">2025. Korea Computer Congress 2025 (KCC2025)</Text>
      <Text>
        김정원,
        <Text as="span" fontWeight="bold">
          &nbsp;김은호
        </Text>
        , 박상근
      </Text>
      {isMdOrSmaller ? (
        <VStack mt="12px">
          <Image
            w="120"
            h="240px"
            src="https://github.com/eunnho98/eunnho/blob/main/public/KCC2/1.png?raw=true"
            borderRadius="6px"
          />
          <Text fontSize="14px" mt="12px">
            수많은 사람들이 소셜 미디어를 사용하며 타인과의 비교를 경험한다.
            특히 자신보다 나은 사람과의 비교인 상향 비교로 인한 부정적인 영향이
            크다. 이에 본 연구에서는 사용자의 성향 및 특징과 소셜 미디어 콘텐츠
            요소를 통합적으로 고려하여 상향 비교를 유발할 수 있는 콘텐츠를
            필터링하는 시스템을 제안한다. 인스타그램을 대상으로 개인화된 상향
            비교 유발 여부를 예측하는 모델을 제작했으며, 모델을 적용하여 상향
            비교를 유발한다고 예측된 스토리를 가려 상향 비교를 완화하는 크롬
            플러그인을 개발하였다. 사용자 스터디를 통해 그 유용성을 검증했다.
          </Text>
        </VStack>
      ) : (
        <HStack w="100%" gap="8" mt="8px">
          <Image
            w="250px"
            h="200px"
            src="https://github.com/eunnho98/eunnho/blob/main/public/KCC2/1.png?raw=true"
            borderRadius="6px"
            flex="1"
          />
          <Text flex="2" fontSize="14px">
            수많은 사람들이 소셜 미디어를 사용하며 타인과의 비교를 경험한다.
            특히 자신보다 나은 사람과의 비교인 상향 비교로 인한 부정적인 영향이
            크다. 이에 본 연구에서는 사용자의 성향 및 특징과 소셜 미디어 콘텐츠
            요소를 통합적으로 고려하여 상향 비교를 유발할 수 있는 콘텐츠를
            필터링하는 시스템을 제안한다. 인스타그램을 대상으로 개인화된 상향
            비교 유발 여부를 예측하는 모델을 제작했으며, 모델을 적용하여 상향
            비교를 유발한다고 예측된 스토리를 가려 상향 비교를 완화하는 크롬
            플러그인을 개발하였다. 사용자 스터디를 통해 그 유용성을 검증했다.
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default KCSE;
