import { Link, Flex, Text } from "@chakra-ui/react";
import React from "react";

const NavHeading = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Text mr="10px" fontWeight="800" fontFamily="sans-serif">
          Notifications
        </Text>
        <Text
          bg="hsl(228, 45%, 44%)"
          color="white"
          borderRadius="5px"
          w="28px"
          textAlign="center"
          py="2px"
        >
          3
        </Text>
      </Flex>

      <Link href="#" textDecor="none" color="gray" fontFamily="sans-serif">
        Mark all as read
      </Link>
    </Flex>
  );
};

export default NavHeading;
