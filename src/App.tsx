import React, { useEffect, useState } from 'react';
import Page from './components/atoms/Page';
import Header from './components/organism/Header';
import { ThemeProvider } from './context/themeContext';
import styled from 'styled-components';
import i18next from 'i18next';
import Content from './components/sections/ContentSection';
import Footer from './components/sections/FooterSection';
import './trans/i18n.ts';
import 'animate.css/animate.min.css';

import './App.scss';
function App() {
  /**
   * State
   */
  const [lang, setLang] = useState('');

  /**
   * UseEffect
   * Init language to the value in local storage. If value doesn't exist, set language to English.
   */
  useEffect(() => {
    const temp = localStorage.getItem('lang') ?? 'en';
    setLang(temp);
    i18next.changeLanguage(temp);
  }, []);

  /**
   * Change language  globally based on a given language
   * @param {string} lang
   */
  const handleChangeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang);
    setLang(lang);
    i18next.changeLanguage(lang);
  };

  return (
    <main style={{ position: 'absolute', width: '100%', top: 0, left: 0 }}>
      <ThemeProvider>
        <Page>
          <Header lang={lang} handleChangeLanguage={handleChangeLanguage} />
          <Container>
            <Content />
            <Footer />
          </Container>
        </Page>
      </ThemeProvider>
    </main>
  );
}

/**
 * Styled Components
 */
const Container = styled.div`
  height: 100%;
  max-width: 1200px;
`;
export default App;
