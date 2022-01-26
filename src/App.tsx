import React, { useEffect, useState } from "react";
import Page from "./components/atoms/Page";
import Header from "./components/organism/Header";
import { ThemeProvider } from "./context/theme";
import styled from "styled-components";
import Content from "./components/helperComponents/Content";
import Footer from "./components/helperComponents/Footer";
import i18next from "i18next";
import "./trans/i18n.ts";

//todo: to remove
import "./App.scss";

function App() {
  const [lang, setLang] = useState("");
  useEffect(() => {
    let temp = localStorage.getItem("lang") ?? "en";
    setLang(temp);
    i18next.changeLanguage(temp);
  },[]);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLang(lang);
    i18next.changeLanguage(lang);
  };
  return (
    <ThemeProvider>
      <Page>
        <Header lang={lang} changeLanguage={changeLanguage}/>
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
