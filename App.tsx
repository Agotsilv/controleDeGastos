import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/thema";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/pages/Routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
