import { Box } from "@chakra-ui/react";
import React from "react";
import Index from "./components/Index";
import "../src/App.css";

const App = () => {
  return (
    <Box bg="hsl(210, 60%, 98%)" py="20px">
      <Box
        bg="white"
        boxShadow="1px 1px 11px 0.5px #888888"
        w="800px"
        mx="auto"
        borderRadius="5px"
        p="20px 15px"
      >
        <Index />
      </Box>
    </Box>
  );
};

export default App;
