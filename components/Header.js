import {
  Box,
  Link,
  Input,
  Flex,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Tabs from "@/components/Tabs";

export default function Header(props) {
  const { handleSearch, tabs, tabChange } = props;

  const ToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    if (colorMode == "light") {
      return (
        <>
          <MoonIcon
            _hover={{ cursor: "pointer" }}
            onClick={() => toggleColorMode()}
          />
        </>
      );
    }
    return (
      <>
        <SunIcon
          _hover={{ cursor: "pointer" }}
          onClick={() => toggleColorMode()}
        />
      </>
    );
  };

  return (
    <Box>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        pb={0}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex align={"center"} justify={"space-between"}>
          <Link
            textDecoration={"none"}
            fontSize="3xl"
            href="/"
            fontWeight={"bold"}
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            color={useColorModeValue("gray.800", "white")}
            style={{ textDecoration: "none" }}
          >
            Niswey
          </Link>

          {handleSearch && (
            <Box width={600} m={"auto"}>
              <Input
                onChange={(event) => handleSearch(event)}
                fontWeight={"medium"}
                fontFamily={"Inter"}
                placeholder="Search by name or role..."
                size="lg"
              />
            </Box>
          )}

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {ToggleButton()}
          </Stack>
        </Flex>
        {tabs && <Tabs tabChange={tabChange} tabs={tabs} />}
      </Box>
    </Box>
  );
}
