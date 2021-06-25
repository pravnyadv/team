import { Heading, Box, Image, Tag, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Card(props) {
  const { id, name, role, profile_url } = props;

  return (
    <Link href={`member/${encodeURIComponent(id)}`}>
      <Box
        cursor="pointer"
        px={"80px"}
        py={"40px"}
        rounded="lg"
        boxShadow={useColorModeValue("lg", "dark-lg")}
        m={2}
        w={300}
      >
        <Box textAlign="center">
          <Image
            borderRadius="sm"
            m="auto"
            maxW={"80px"}
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
          fontSize="sm"
          marginTop="2"
        >
          {name}
        </Heading>
        <Box mt={5}>
          <Tag
            fontFamily={"Inter"}
            rounded="sm"
            size={"sm"}
            key={"sm"}
            variant="solid"
            colorScheme="purple"
          >
            {role}
          </Tag>
        </Box>
      </Box>
    </Link>
  );
}
