import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { NOTIFICATIONS } from "../Data/notificationsData";

const Notification = () => {
  return (
    <Box mt="20px">
      {NOTIFICATIONS.map((notification, index) => {
        return (
          <Fragment>
            <Flex
              key={index}
              bg={!notification.hasRead ? "hsl(210, 60%, 98%)" : "#fff"}
              mb="5px"
              alignItems="flex-start"
              p="10px"
              cursor="pointer"
              fontFamily="Familjen Grotesk"
              _hover={{
                bg: !notification.hasRead ? "hsl(210, 60%, 98%)" : "#F8F8F8",
              }}
            >
              <Image
                src={notification.userImg}
                w="40px"
                h="40px"
                borderRadius="100%"
                border="none"
                alt="Image"
                mr="20px"
              />

              <Box>
                <Flex alignItems="center">
                  <Heading fontSize="15px">{notification.name}</Heading>
                  <Text px="5px">{notification.notify}</Text>
                  <Heading
                    fontSize="15px"
                    color={"hsl(228, 45%, 44%)"}
                    mr="5px"
                  >
                    {notification.reactedTo}
                  </Heading>
                  {!notification.hasRead && (
                    <Box
                      w="7px"
                      h="7px"
                      borderRadius="50%"
                      bg="red"
                      mt="-8px"
                    />
                  )}
                </Flex>
                <Text>{notification.time}</Text>

                {notification.content && (
                  <Text border="1px solid black" mt="20px" p="10px">
                    {notification.content}
                  </Text>
                )}
              </Box>
            </Flex>
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Notification;
