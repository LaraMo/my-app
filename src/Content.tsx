import React, { useRef, useEffect, useState, useContext } from "react";
import styled from "styled-components";
import "./App.css";
import Span from "./components/atoms/Span";
import AboutMe from "./components/helperComponents/AboutMe";
import Card from "./components/molecules/Card";
import { headings, projects, schools, workplaces } from "./const";
import { ThemeContext } from "./context/theme";
import { colors } from "./styles/colors";

const getDimensions = (ele: any) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

// const scrollTo = (ele: any) => {
//   ele.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//   });
// };

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  let theme = isDark ? "dark" : "light";
  const [visibleSection, setVisibleSection] = useState("aboutMe");

  const headerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const workplacesRef = useRef(null);
  const educationRef = useRef(null);

  const sectionRefs = [
    { section: "aboutMe", ref: aboutMeRef },
    { section: "projects", ref: projectsRef },
    { section: "workplaces", ref: workplacesRef },
    { section: "education", ref: educationRef },
  ];

  const goToViolation = (id: string) => {
    //@ts-ignore
    let ele = sectionRefs.find((x) => x.section === id).ref.current;
    console.log(ele);
    window.scrollTo({
      //@ts-ignore
      top: ele?.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        //@ts-ignore
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection("");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <>
      <Nav id="nav" ref={headerRef}>
        {headings.map((heading, key) => {
          return (
            <Span
              noBorder
              isSelected={visibleSection === heading.id}
              //@ts-ignore
              onClick={() => goToViolation(heading.id)}
              //@ts-ignore
              background={heading.color[theme]}
              width="25%"
              color={isDark ? colors.textLight : colors.textDark}
            >
              {heading.name}
            </Span>
          );
        })}
      </Nav>
      <Section ref={aboutMeRef}>
        {/* @ts-ignore */}
        <Div background={headings[0].color[theme]}>
          <AboutMe />
        </Div>
      </Section>
      <Section ref={projectsRef}>
        {/* @ts-ignore */}
        <Div background={headings[1].color[theme]}>
          {projects.map((project) => {
            return <Card {...project} />;
          })}
        </Div>
      </Section>
      <Section ref={workplacesRef}>
        {/* @ts-ignore */}
        <Div background={headings[2].color[theme]}>
          {workplaces.map((workplace) => {
            return <Card {...workplace} />;
          })}
        </Div>
      </Section>
      <Section style={{ minHeight: "80vh" }} ref={educationRef}>
        {/* @ts-ignore */}
        <Div background={headings[3].color[theme]}>
          {schools.map((school) => {
            return <Card {...school} />;
          })}
        </Div>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 50px 0;
`;
const Nav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 15px;
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Div = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  margin-top: 40px;
  max-width: 750px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
export default Content;
