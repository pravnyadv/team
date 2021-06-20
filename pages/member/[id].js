import {
  Image,
  Heading,
  Tag,
  Box,
  Container,
  Flex,
  Icon,
  Text,
  Badge,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";
import Header from "@/components/Header";

export default function Member(props) {
  const { name, role, status, profile_url, interests, skills } = props.team;
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Box py={1} textAlign="right">
          <Link href="/">
            <Button size="sm" colorScheme="purple">
              Back
            </Button>
          </Link>
        </Box>
        <Flex
          pt={10}
          justifyContent={"center"}
          direction={"column"}
          width={"full"}
        >
          <Flex>
            <Box
              width="300px"
              minHeight="500px"
              bg={useColorModeValue("gray.100", "dark")}
              boxShadow={useColorModeValue("sm", "dark-lg")}
            >
              <Box mt={20} textAlign="center">
                <Box>
                  <Image
                    borderRadius="sm"
                    m="auto"
                    maxW={"150px"}
                    src={profile_url}
                    alt={name}
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
                <Heading
                  color={useColorModeValue("gray.600", "white")}
                  fontFamily={"Inter"}
                  fontSize="xl"
                  marginTop="2"
                >
                  {name}
                </Heading>
                <Box mt={5}>
                  <Tag
                    fontFamily={"Inter"}
                    rounded="sm"
                    size={"md"}
                    key={"sm"}
                    variant="solid"
                    colorScheme="purple"
                  >
                    {role}
                  </Tag>
                </Box>
              </Box>
            </Box>
            <Box flex="1" p={5} pl={50}>
              {status && (
                <Box mb={5}>
                  <Heading fontSize="xl" mb={1}>
                    Status
                  </Heading>
                  <Text fontFamily={"Inter"}>{status}</Text>
                </Box>
              )}
              {skills && (
                <Box mb={5}>
                  <Heading fontSize="xl" mb={1}>
                    Skills
                  </Heading>
                  <HStack spacing="10px">
                    {skills.split(",").map((skill, index) => {
                      return (
                        <Badge
                          key={index}
                          fontFamily={"Inter"}
                          colorScheme={"green"}
                        >
                          {skill}
                        </Badge>
                      );
                    })}
                  </HStack>
                </Box>
              )}
              {interests && (
                <Box mb={5}>
                  <Heading fontSize="xl" mb={1}>
                    Interests
                  </Heading>
                  <Text fontFamily={"Inter"}>{interests}</Text>
                </Box>
              )}
            </Box>
          </Flex>

          <Box mb={50} textAlign="center">
            <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={"purple.400"}>
              <path
                fill={"currentColor"}
                d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
              />
            </Icon>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://wa.niswey.net/api/member/${id}`);
  const data = await res.json();

  return {
    props: {
      team: data.member,
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
