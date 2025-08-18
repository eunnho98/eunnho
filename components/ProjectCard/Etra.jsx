import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css?after';
import {
  Box,
  Flex,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { LineGraySmall } from '../layout/Line';
import Link from 'next/link';

function Etra(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMdOrSmaller] = useMediaQuery('(max-width: 800px)');
  const imgList = props.imgList;
  const title = props.title;

  return (
    <Box>
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      {isMdOrSmaller ? (
        <VStack mt="12px">
          <Image
            display="block"
            src={imgList}
            w="100%"
            maxW="80vw"
            h="400px"
            onClick={onOpen}
            cursor="pointer"
          />
          <Text mt="24px">
            조교는 매 학기마다 처음 보는 학생을 담당하여, 학생의 학습 수준을
            파악하기 어려워 비효율적인 답변을 제공할 때가 많습니다.
          </Text>
          <Text>
            이러한 문제를 해결하고자 학생 수준 맞춤형 피드백 및 학습 지원을
            제공하는, LLM 기반 챗봇 시스템을 제안하였습니다.
          </Text>
          <Text>
            교내에서 진행한 사업으로, 단순한 시스템 개발이 아닌 계획 수립과
            제안서 작성, 연구비 집행까지 전 과정을 직접 총괄하였습니다. 이를
            통해 기술 개발 및 프로젝트 운영 과정까지 함께 경험할 수 있었습니다.
            또한 기존에는 단순히 사용하기만 했던 LLM 챗봇을 그래프 RAG와
            랭체인을 활용해 직접 구현하면서 LLM의 내부 동작 과정과 원리, 그리고
            활용 방식 전반에 대해 다시 학습하고 깊이 이해할 수 있었습니다.
          </Text>
          <LineGraySmall w="80%" my="6px" />
          <VStack alignItems="center" gap={5}>
            <VStack>
              <Text fontWeight="bold">👀 주요 기능</Text>
              <UnorderedList>
                <ListItem>
                  학생의 학습 데이터를 기반으로 학습 성취도 자동 분석
                </ListItem>
                <ListItem>
                  학생 수준을 고려한 개인화된 피드백 및 연습 문제 생성
                </ListItem>
              </UnorderedList>
            </VStack>

            <VStack>
              <Text fontWeight="bold">🛠 Tech Stack</Text>
              <Text>Python, LangChain, Gragh RAG</Text>
            </VStack>
          </VStack>
        </VStack>
      ) : (
        <Flex
          w="100%"
          mt="12px"
          gap={8}
          alignItems="flex-start"
          justify="center"
        >
          <Image
            display="block"
            src={imgList}
            w="350px"
            h="400px"
            onClick={onOpen}
            cursor="pointer"
          />
          <VStack>
            <Text>
              조교는 매 학기마다 처음 보는 학생을 담당하여, 학생의 학습 수준을
              파악하기 어려워 비효율적인 답변을 제공할 때가 많습니다.
            </Text>
            <Text>
              이러한 문제를 해결하고자 학생 수준 맞춤형 피드백 및 학습 지원을
              제공하는, LLM 기반 챗봇 시스템을 제안하였습니다.
            </Text>
            <Text>
              교내에서 진행한 사업으로, 단순한 시스템 개발이 아닌 계획 수립과
              제안서 작성, 연구비 집행까지 전 과정을 직접 총괄하였습니다. 이를
              통해 기술 개발 및 프로젝트 운영 과정까지 함께 경험할 수
              있었습니다. 또한 기존에는 단순히 사용하기만 했던 LLM 챗봇을 그래프
              RAG와 랭체인을 활용해 직접 구현하면서 LLM의 내부 동작 과정과 원리,
              그리고 활용 방식 전반에 대해 다시 학습하고 깊이 이해할 수
              있었습니다.
            </Text>
            <LineGraySmall w="100%" my="6px" />
            <VStack alignItems="center" gap={5}>
              <VStack>
                <Text fontWeight="bold">👀 주요 기능</Text>
                <UnorderedList>
                  <ListItem>
                    학생의 학습 데이터를 기반으로 학습 성취도 자동 분석
                  </ListItem>
                  <ListItem>
                    학생 수준을 고려한 개인화된 피드백 및 연습 문제 생성
                  </ListItem>
                </UnorderedList>
              </VStack>

              <VStack>
                <Text fontWeight="bold">🛠 Tech Stack</Text>
                <Text>Python, LangChain, Gragh RAG</Text>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
      )}

      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={imgList} w="100%" h="500px" display="block" />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Etra;
