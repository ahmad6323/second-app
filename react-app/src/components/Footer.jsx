import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"md"} textTransform={"uppercase"}>
            Follow me on Github
          </Heading>
          <HStack borderBottom={"2px solid white "} py={"2"}>
            <Input
              placeholder="enter a email "
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              colorScheme="purple"
              variant={"ghost"}
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            Video hub
          </Heading>
          <Text>All rights are reserved by @Ahmad</Text>
        </VStack>
        <VStack w={'full'}>
        <Heading textTransform={"uppercase"} textAlign={"center"}>
            Social Media
          </Heading>

        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
