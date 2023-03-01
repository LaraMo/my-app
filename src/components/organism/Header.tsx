import React, { useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { BsFillSunFill, BsMoonFill, BsFillTreeFill } from 'react-icons/bs';
import { GiRabbitHead } from 'react-icons/gi';
import { ThemeContext } from '../../context/themeContext';
import Span from '../atoms/Span';
import Title from '../atoms/Title';
import { colors } from '../../styles/colors';
import ThemeIcon from '../atoms/ThemeIcon';
import Superwoman from '../atoms/Superwoman';
import Snow from '../atoms/Snow';
import { themeList } from '../../utils/const';
import 'react-toastify/dist/ReactToastify.css';
import * as THREE from 'three';

/**
 * Interface
 */
interface HeaderProps {
  lang: string;
  handleChangeLanguage: (lang: string) => void;
}
/**
 * Header
 * Immutable props - check HeaderProps for more details.
 * @returns
 */
const Header = ({ lang, handleChangeLanguage }: HeaderProps) => {
  /**
   * Hooks
   */
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  // dark theme will use three.js to render
  // if(theme === "dark"){

  // }
  // Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    //@ts-ignore
    canvas: document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 30;
  camera.position.x = -3;

  renderer.render(scene, camera);

  // Lights
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  /**
   * Add stars
   */
  function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill('')
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  }

  // @ts-ignore
  Array(200).fill('').forEach(addStar);

  const themeArray = {
    dark: 'https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg',
  };
  // Background

  // @ts-ignore
  const spaceTexture = new THREE.TextureLoader().load(themeArray[theme]);
  scene.background = spaceTexture;

  /**
   * Boxes
   */
  const boxes = [
    'https://hips.hearstapps.com/hmg-prod/images/cup-of-coffee-on-colored-background-royalty-free-image-875681938-1543862983.jpg?crop=0.680xw:1.00xh;0.164xw,0&resize=1200:*',
  ];

  const boxMeshArray: any[] = [];
  const addBoxesToScene = () => {
    boxes.forEach((box, i) => {
      const boxMesh = new THREE.Mesh(
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(box) })
      );

      boxMesh.position.z = i;
      boxMesh.position.x = 8;
      boxMesh.position.y = 2;
      boxMeshArray.push(boxMesh);
      scene.add(boxMesh);
    });
  };

  addBoxesToScene();
  const moonTexture = new THREE.TextureLoader().load(
    'https://images.unsplash.com/photo-1519806390608-acf7ef9c8d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'
  );

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
    })
  );

  moon.position.x = -50;
  moon.position.y = -10;
  moon.position.z = 3;

  scene.add(moon);

  const earthTexture = new THREE.TextureLoader().load(
    'https://images.unsplash.com/photo-1572615318109-4b6595947181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  );

  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: earthTexture,
    })
  );

  earth.position.x = -100;
  earth.position.y = -10;
  earth.position.z = -3;

  scene.add(earth);

  // Scroll Animation

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    earth.rotation.x += 0.05;
    earth.rotation.y += 0.075;
    earth.rotation.z += 0.05;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  }

  document.body.onscroll = moveCamera;
  moveCamera();

  // Animation Loop

  function animate() {
    requestAnimationFrame(animate);
    boxMeshArray.forEach((x, i) => {
      x.rotation.x += 0.01;
      x.rotation.y += 0.005;
      x.rotation.z += 0.01;
    });

    moon.rotation.x += 0.01;
    moon.rotation.y += 0.005;
    moon.rotation.z += 0.01;

    earth.rotation.x += 0.005;
    earth.rotation.y += 0.0075;
    earth.rotation.z += 0.05;

    renderer.render(scene, camera);
  }

  animate();

  return (
    <Parallax theme={theme}>
      <Container>
        {theme === themeList.CHRISTMAS && <Snow />}
        <RightSide>
          <Title
            style={{
              color: colors[theme].text,
              fontFamily: 'Cookie',
              fontSize: '8vh',
              transform: 'rotate(-10deg)',
              width: '200px',
            }}
            color={colors[theme].accentText}
          >
            {t('welcome.hello')}
          </Title>
          <Langs>
            <Span color={colors[theme].text} onClick={() => handleChangeLanguage('en')} isSelected={lang === 'en'}>
              EN
            </Span>
            <Span color={colors[theme].text} onClick={() => handleChangeLanguage('fr')} isSelected={lang === 'fr'}>
              FR
            </Span>
          </Langs>
          <IconContainer theme={theme}>
            <ThemeIcon themeValue="dark" svg={<BsMoonFill />} />
            <ThemeIcon themeValue="light" svg={<BsFillSunFill />} />
            <ThemeIcon themeValue="christmas" svg={<BsFillTreeFill />} />
            <ThemeIcon themeValue="easter" svg={<GiRabbitHead />} />
          </IconContainer>
        </RightSide>
        <ScrollAnimation animateOnce animateIn="animate__fadeInRight">
          <Superwoman />
        </ScrollAnimation>
        <ToastContainer />
      </Container>
    </Parallax>
  );
};

/**
 * Styled Components
 */
const Parallax = styled.div<{ theme: string }>`
  background: ${(props) => colors[props.theme as keyof typeof colors].parallax};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  margin-bottom: 30px;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const RightSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Langs = styled.div`
  display: flex;
  margin: 20px;
`;

const IconContainer = styled.div<{ theme: string }>`
  display: flex;
  z-index: 10;
  > span {
    > svg {
      fill: ${(props) => colors[props.theme as keyof typeof colors].text};
      height: 20px;
      width: 20px;
    }
  }
`;
export default Header;
