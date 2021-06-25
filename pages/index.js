import { Box, chakra, Container, Flex, Icon, HStack } from "@chakra-ui/react";

import Card from "@/components/Card";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

function App(props) {
  var { data } = props;
  var [teams] = useState(data);
  var [tabs, setTabs] = useState([]);
  var [team, setTeam] = useState(data);
  const [value, setValue] = useState("");

  useEffect(() => {
    let fullTimeCount = 0;
    let internCount = 0;
    let tabsList = [];
    teams.map((entry) => {
      if (entry.isIntern) {
        internCount++;
      } else {
        fullTimeCount++;
      }
    });
    setTabs([
      {
        name: "all",
        label: "All",
        count: fullTimeCount + internCount,
        active: true,
      },
      {
        name: "full",
        label: "Full-Time",
        count: fullTimeCount,
        active: false,
      },
      {
        name: "all",
        label: "Intern",
        count: internCount,
        active: false,
      },
    ]);
  }, []);

  useEffect(() => {
    if (!value) {
      setTeam(teams);
      return;
    }

    team = teams.filter((item) => {
      let string = "";
      const indexKeys = ["name", "role"];
      for (const [key, itemValue] of Object.entries(item)) {
        if (indexKeys.includes(key)) string += " " + itemValue;
      }
      if (string.toLocaleLowerCase().includes(value.toLowerCase())) {
        return item;
      }
    });
    setTeam(team);
  }, [value]);

  const handleSearch = (event) => {
    setValue(event.target.value);
  };

  const tabChange = (index) => {
    let updatedTabs = tabs.map((tab, i) => {
      tab.active = false;
      if (index == i) {
        tab.active = true;
      }
      return tab;
    });
    setTabs(updatedTabs);

    if (index === 0) {
      setTeam(teams);
      return;
    }

    // only show selected member type
    let filtered = [];
    for (let i = 0; i < teams.length; i++) {
      let entry = teams[i];
      if (index === 1 && !entry.isIntern) {
        filtered.push(entry);
      }
      if (index === 2 && entry.isIntern) {
        filtered.push(entry);
      }
    }
    setTeam(filtered);
  };

  return (
    <>
      <Header handleSearch={handleSearch} tabChange={tabChange} tabs={tabs} />
      <Container maxW="container.xl">
        <Flex
          textAlign={"center"}
          pt={10}
          justifyContent={"center"}
          direction={"column"}
          width={"full"}
        >
          <Flex justify="center" wrap="wrap" spacing="24px">
            {team.map((cardInfo, index) => (
              <Card {...cardInfo} key={index} />
            ))}
          </Flex>
          {!team.length && !teams.length && (
            <chakra.p fontFamily={"Inter"}>List will appear shortly.</chakra.p>
          )}
          {!team.length && teams.length && (
            <chakra.p fontFamily={"Inter"}>No match found</chakra.p>
          )}
          <Box mb={50}>
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

export async function getServerSideProps(context) {
  const res = await fetch("https://wa.niswey.net/api/team");
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data.team,
    },
  };
}

export default App;
