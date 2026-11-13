import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Featured from '../components/sections/Featured';
import ExperienceSection from '../components/ExperienceSection';
import WorkAccordion from '../components/WorkAccordion';
import Testimonials from '../components/sections/Testimonials';
import { featured } from '../content/featured';
import { work } from '../content/work';
import { involvement } from '../content/involvement';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <WorkAccordion id="work" heading="Work Experience" items={work} />
      <ExperienceSection id="experience" heading="Experience" items={involvement} />
      {featured.length > 0 && <Featured />}
      <Testimonials />
    </StyledMainContainer>
  </Layout>
);

export default Home;
