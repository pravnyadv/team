import { HStack, Flex, chakra, Badge } from "@chakra-ui/react";

export default function Tabs(props) {
  const { tabs, tabChange } = props;
  return (
    <Flex justify={"center"} mt={2}>
      <HStack spacing={"30px"}>
        {tabs.map((tab, index) => {
          let active = "";

          tab.active &&
            (active = {
              content: '""',
              position: "absolute",
              borderRadius: "5px",
              width: "100%",
              left: 0,
              bottom: 0,
              height: "5px",
              background: "purple",
            });
          return (
            <chakra.div
              cursor="pointer"
              onClick={() => tabChange(index)}
              key={index}
              position={"relative"}
              px={5}
              py={3}
              fontSize={"large"}
              fontFamily={"Inter"}
              _after={active}
            >
              {tab.label}
              {tab.count && (
                <Badge ml={2} colorScheme={"purple"}>
                  {tab.count}
                </Badge>
              )}
            </chakra.div>
          );
        })}
      </HStack>
    </Flex>
  );
}
