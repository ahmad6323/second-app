import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
      zIndex={'overlay'}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20px"}></BiMenuAltLeft>
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>react app</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={"ghost"} colorScheme="purple">
                <Link to={"/upload"}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack pos={"absolute"} bottom={"10"} left={"0"} w={'full'} justifyContent={'space-evenly'}>
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"outline"}>
                <Link to={"/signup"}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
