import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Jobs from '../components/sections/Jobs';
import Featured from '../components/sections/Featured';
import Involvement from '../components/sections/Involvement';
import Testimonials from '../components/sections/Testimonials';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Involvement />
      <Featured />
      <Testimonials />
    </StyledMainContainer>
  </Layout>
);

export default Home;
