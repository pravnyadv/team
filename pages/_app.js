import "../styles/app.css";
import { StoreProvider, useStore } from "../lib/zustandProvider";
import { useHydrate } from "../lib/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <StoreProvider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </StoreProvider>
  );
}
export default MyApp;
