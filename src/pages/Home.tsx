import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Jobs from '../components/sections/Jobs';
import Featured from '../components/sections/Featured';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default Home;
