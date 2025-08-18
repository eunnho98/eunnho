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
  const title =
    '다중 언어 모델 기반 멀티 에이전트 챗봇 토론 프레임워크를 통한 \n환각 탐지 및 교정';

  const [isMdOrSmaller] = useMediaQuery('(max-width: 800px)');

  return (
    <Box>
      <Text
        textAlign="center"
        fontSize="2xl"
        fontWeight="bold"
        whiteSpace="pre-line"
      >
        {title}
      </Text>
      <HStack py="6px">
        <Badge
          type="conf"
          name="KCC 2025"
          link="https://www.kiise.or.kr/conference/kcc/2025/"
        />
        <Badge type="pdf" name="PDF" link="/pdf/kcc1.pdf" />
        <Badge type="award" name="Best Poster Award" link="/pdf/kcc1.pdf" />
      </HStack>
      <Text as="i">2025. Korea Computer Congress 2025 (KCC2025)</Text>
      <Text>
        송인혁,
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
            src="https://github.com/eunnho98/eunnho/blob/main/public/KCC1/1.png?raw=true"
            borderRadius="6px"
          />
          <Text fontSize="14px" mt="12px">
            대형 언어 모델(LLM)을 활용한 정보 탐색 과정이 대중화되면서,
            챗봇에서의 환각 문제가 대두되고 있 다. 이러한 환각 문제를 해결하기
            위한 여러 접근 방식의 사전 연구들이 진행되었으나, 단일 학습 데이
            터에 기반을 두고 있기 때문에 학습 데이터의 편향 문제를 완전히
            해소하지 못했다는 한계가 존재한다. 본 연구는 멀티 언어 모델을 활용한
            멀티 에이전트 챗봇 토론 프레임워크를 개발해 단일 모델 접근의 제 약을
            뛰어넘어, 보다 신뢰할 수 있는 LLM 기반 검색 서비스를 구현하고자
            한다.
          </Text>
        </VStack>
      ) : (
        <HStack w="100%" gap="8" mt="8px">
          <Image
            w="250px"
            h="200px"
            src="https://github.com/eunnho98/eunnho/blob/main/public/KCC1/1.png?raw=true"
            borderRadius="6px"
            flex="1"
          />
          <Text flex="2" fontSize="14px">
            대형 언어 모델(LLM)을 활용한 정보 탐색 과정이 대중화되면서,
            챗봇에서의 환각 문제가 대두되고 있 다. 이러한 환각 문제를 해결하기
            위한 여러 접근 방식의 사전 연구들이 진행되었으나, 단일 학습 데이
            터에 기반을 두고 있기 때문에 학습 데이터의 편향 문제를 완전히
            해소하지 못했다는 한계가 존재한다. 본 연구는 멀티 언어 모델을 활용한
            멀티 에이전트 챗봇 토론 프레임워크를 개발해 단일 모델 접근의 제 약을
            뛰어넘어, 보다 신뢰할 수 있는 LLM 기반 검색 서비스를 구현하고자
            한다.
          </Text>
        </HStack>
      )}
    </Box>
  );
}

export default KCSE;
