import React, { useRef, useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Span from "../atoms/Span";
import AboutMe from "./AboutMe";
import Card from "../molecules/Card";
import { headings, projects, education, workplaces } from "../../const/const";
import { ThemeContext } from "../../context/theme";
import { colors } from "../../styles/colors";
import Title from "../atoms/Title";

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

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  let theme = isDark ? "dark" : "light";
  const [visibleSection, setVisibleSection] = useState("aboutMe");
  const { t } = useTranslation();

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


//will scroll to requested section by id
const goToViolation = (id: string) => {
  let element = sectionRefs.find((x) => x.section === id)
  if(element){
    window.scrollTo({
      //@ts-ignore
      top: element?.ref?.current.offsetTop,
      behavior: "smooth",
    });
  }
 
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

  const contents = [
    <AboutMe />,
    projects.map((project, key) => {
      return <Card key={key} {...project} />;
    }),
    workplaces.map((workplace, key) => {
      return <Card key={key} {...workplace} />;
    }),
    education.map((education, key) => {
      return <Card key={key} {...education} />;
    }),
  ];
  return (
    <>
      <Nav id="nav" ref={headerRef}>
        {headings.map((heading, key) => {
          return (
            <Span
              key={key}
              noBorder
              isSelected={visibleSection === heading.id}
              onClick={() => goToViolation(heading.id)}
              //@ts-ignore
              background={heading.color[theme]}
              width="25%"
              color={isDark ? colors.lightText : colors.darkText}
            >
              {t([heading.name])}
            </Span>
          );
        })}
      </Nav>
      {contents.map((content, key) => {
        return (
          <Section
            style={{ minHeight: key === 3 ? "80vh" : "" }}
            ref={sectionRefs[key].ref}
          >
            <Title style={{ fontFamily: "Cookie", fontSize: "8vh" }}>
              {t(`${sectionRefs[key].section}.title`)}
            </Title>
            {/* @ts-ignore */}
            <Div background={headings[key].color[theme]}>{content}</Div>
          </Section>
        );
      })}
    </>
  );
};

const Section = styled.section`
  padding: 50px 0;
  > p {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    > p {
      display: unset;
    }
  }
`;
const Nav = styled.div`
  padding: 15px;
  display: flex;
  @media only screen and (min-width: 500px) {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media only screen and (max-width: 500px) {
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
