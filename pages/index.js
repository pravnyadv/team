import { Heading, Box, chakra, Input, Container, Flex } from "@chakra-ui/react";
import { useStore } from "../lib/zustandProvider";
import { useEffect } from "react";
import Card from "../components/Card";
const axios = require("axios").default;

export default function App() {
  const { team, setTeam } = useStore();
  useEffect(() => {
    axios.get("http://localhost:8000/api/team").then((res) => {
      setTeam(res.data.team);
    });
  }, []);

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
        {team.map((member, index) => {
          console.log(member);
          return <Card {...member} key={index} />;
        })}
      </Flex>
    </Container>
  );
}
