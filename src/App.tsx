import React from "react";
import Page from "./components/atoms/Page";
import Header from "./components/organism/Header";
import { ThemeProvider } from "./context/theme";
import styled from "styled-components";
import Content from "./components/helperComponents/Content";
import Footer from "./components/helperComponents/Footer";
import "./trans/i18n.ts";

//todo: to remove
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Page>
        <Header />
        <Container>
          <Content />
          <Footer />
        </Container>
      </Page>
    </ThemeProvider>
  );
}

const Container = styled.div`
  padding: 30px;
  max-width: 1200px;
  height: 100%;
`;
export default App;
