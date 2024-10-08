import Title from '@/components/Title';
import Profile from '@/components/Profile';
import { LineGraySmall } from '@/components/layout/Line';
import {
  Box,
  Text,
  VStack,
  HStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

function index() {
  return (
    <Box mx="24px">
      <Title title="Eunnho Kim" caption="" />
      <Profile />
      <Text fontSize="3xl" fontWeight="bold">
        Interest
      </Text>
      <LineGraySmall mt="15px" />

      <Text fontSize="xl" mt="24px">
        I am interested in data analysis, web, UI/UX, and I am especially
        interested in social data analysis
      </Text>
      <Text fontSize="xl" mt="8px">
        I strive to improve UX and contribute to the HCI field through user data
        analysis.
      </Text>
      <Text fontSize="xl" mt="8px">
        My goal is to enable users to have a better experience and create value
        through analysis of user behavior data within the social system.
      </Text>
      <Box mt="64px">
        <Text fontSize="3xl" fontWeight="bold">
          Stack
        </Text>
        <LineGraySmall mt="15px" />
        <VStack align="flex-start">
          <Text fontSize="2xl" fontWeight="bold" mt="24px">
            Data Analysis
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/pytorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
            />
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/scikit learn-F7931E?style=for-the-badge&logo=scikit learn&logoColor=white"
            />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" mt="24px">
            Web
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
            />
            <img
              width={200}
              height={200}
              src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/fastapi-009688?style=for-the-badge&logo=fastapi&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/chakraui-319795?style=for-the-badge&logo=chakraui&logoColor=white"
            />
            <img
              width={250}
              height={250}
              src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled components&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react query&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"
            />
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" mt="24px">
            Else
          </Text>
          <HStack wrap="wrap" mt="8px">
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            />
            <img
              width={150}
              height={150}
              src="https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"
            />
            <img
              width={170}
              height={170}
              src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
            />
            <img
              width={100}
              height={100}
              src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"
            />
            <img
              width={140}
              height={140}
              src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
            />
          </HStack>
        </VStack>
      </Box>
      <Box mt="64px">
        <Text fontSize="3xl" fontWeight="bold">
          Career
        </Text>
        <LineGraySmall mt="15px" />
        <UnorderedList mt="24px" spacing={4}>
          <ListItem fontSize="xl">
            <Text as="span">Masters Student in </Text>
            <Text as="span" fontWeight="bold">
              U
            </Text>
            ser e
            <Text as="span" fontWeight="bold">
              X
            </Text>
            perience{' '}
            <Text as="span" fontWeight="bold">
              C
            </Text>
            omputing Lab
            <Link href="https://skpark-khu.github.io/">
              <Text
                ml="24px"
                as="span"
                textColor="gray.400"
                fontWeight="bold"
                _hover={{
                  color: 'blue.300',
                  transitionDuration: '0.2s',
                  transitionTimingFunction: 'linear',
                }}
              >
                Visit →
              </Text>
              <br />
              (2024/03 ~)
            </Link>
          </ListItem>
          <ListItem fontSize="xl">
            <Text as="span">Undergraduate Student in </Text>
            <Text as="span" fontWeight="bold">
              U
            </Text>
            ser e
            <Text as="span" fontWeight="bold">
              X
            </Text>
            perience{' '}
            <Text as="span" fontWeight="bold">
              C
            </Text>
            omputing Lab
            <Text>(2023/09 ~ 2024/02)</Text>
          </ListItem>
          <ListItem fontSize="xl">
            Kyung Hee University, Department of Computer Engineering <br />
            (2018/03 ~ 2024/02)
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default index;
