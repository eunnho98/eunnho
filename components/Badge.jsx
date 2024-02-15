import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Badge(props) {
  console.log(props);
  if (props.type === 'conf') {
    return (
      <Link href={props.link || 'www.google.com'}>
        <Text
          px="6px"
          h="24px"
          bgColor="blue.300"
          fontSize="xs"
          textAlign="center"
          borderRadius="6px"
          lineHeight="22px"
          cursor="pointer"
        >
          {props.name}
        </Text>
      </Link>
    );
  } else if (props.type === 'pdf') {
    return (
      <Text
        as="a"
        px="6px"
        h="24px"
        bgColor="red.300"
        fontSize="xs"
        textAlign="center"
        borderRadius="6px"
        lineHeight="22px"
        cursor="pointer"
        target="_blank"
        href={props.link}
      >
        {props.name}
      </Text>
    );
  }
}

export default Badge;
