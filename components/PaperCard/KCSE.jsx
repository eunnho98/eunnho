import { Box, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Badge from '../Badge';

function KCSE() {
  const title =
    '가속도 센서를 이용한 CNN 기반의 스마트폰 터치 에러 감소 기법 개발';
  return (
    <Box>
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <HStack py="6px">
        <Badge
          type="conf"
          name="KCSE 2024"
          link="http://sigsoft.or.kr/kcse2024/"
        />
        <Badge type="pdf" name="PDF" link="/pdf/kcse.pdf" />
      </HStack>
      <Text as="i">
        2024. Korea Conference on Software Engineering 2024 (KCSE2024)
      </Text>
      <Text>
        <Text as="span" fontWeight="bold">
          김은호
        </Text>
        , 박상근
      </Text>
      <HStack w="100%" gap="8" mt="8px">
        <Image
          w="250px"
          h="200px"
          src="https://github.com/eunnho98/eunnho/blob/main/public/KCSE/1.PNG?raw=true"
          borderRadius="6px"
          flex="1"
        />
        <Text flex="2" fontSize="14px">
          스마트폰의 보급률이 높아지면서 사람들은 일상생활에서 여러 모바일
          서비스를 편리하게 이용할 수 있게 되었다. 스마트폰 사용자는 정지된
          상황뿐 아니라 이동 중에도 한 손으로 스마트폰을 조작하며 모바일
          서비스를 이용하기도 한다. 이동 중에 스마트폰을 사용하면 사용자의 신체
          흔들림 등으로 사용자의 한 손 터치 정확도가 떨어지는 불편함이 있다. 본
          논문에서는 가속도 센서를 통해 측정되는 스마트폰의 기울어진 정도를
          기반으로 사용자가 터치하려는 버튼을 예측하는 CNN 모델을 개발했다. 또한
          예측된 버튼의 터치 허용 영역을 유연하게 확장하는 터치 에러 감소 기법을
          제시하고 실험을 통해 그 유용성에 대하여 검증했다.
        </Text>
      </HStack>
    </Box>
  );
}

export default KCSE;
