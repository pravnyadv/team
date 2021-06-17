import { Heading, Box, chakra, Input, Container, Flex } from "@chakra-ui/react";
import { useStore } from "../lib/zustandProvider";

export default function App() {
  const { cookie_token } = useStore();
  console.log({ cookie_token });

  return (
    <Container maxW="container.lg">
      <Flex
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Heading size="2xl">Hello World</Heading>
      </Flex>
    </Container>
  );
}
