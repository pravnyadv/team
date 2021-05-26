import {
  chakra,
  Box,
  Image,
  Flex,
  Stack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

const UserDetails = (props) => {
  const { name, role, content, avatar, index } = props;

  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={0}
      w="full"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Box
        w="sm"
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={40}
          fit="cover"
          objectPosition="center"
          src={avatar}
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          {/* something here  */}
          <chakra.h1
            mx={3}
            fontWeight="bold"
            color="white"
            fontSize="lg"
            textAlign={["center"]}
          >
            {role}
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
          <chakra.h1
            fontSize="xl"
            fontWeight={"bold"}
            color={useColorModeValue("gray.800", "white")}
          >
            {name}
          </chakra.h1>

          <chakra.p
            py={2}
            fontWeight={"medium"}
            fontFamily={"Inter"}
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {content}
          </chakra.p>

          <Box
            mt={4}
            textAlign="left"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <chakra.div fontSize="12">
              <strong>Skills</strong>
            </chakra.div>
            <chakra.p fontWeight={"medium"} fontFamily={"Inter"}>
              <Badge mr={1} variant="solid" colorScheme="facebook">
                PHP
              </Badge>
              <Badge mr={1} variant="solid" colorScheme="facebook">
                Laravel
              </Badge>
              <Badge mr={1} variant="solid" colorScheme="facebook">
                Linux
              </Badge>
              <Badge mr={1} variant="solid" colorScheme="facebook">
                WordPress
              </Badge>
            </chakra.p>
          </Box>

          <Box
            mt={4}
            textAlign="left"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            <chakra.div fontSize="12">
              <strong>Interests</strong>
            </chakra.div>
            <chakra.p fontWeight={"medium"} fontFamily={"Inter"}>
              Loves Chick Burger
            </chakra.p>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserDetails;
