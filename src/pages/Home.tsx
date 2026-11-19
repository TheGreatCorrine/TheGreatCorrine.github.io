import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Featured from '../components/sections/Featured';
import ExperienceAccordion from '../components/ExperienceAccordion';
import Testimonials from '../components/sections/Testimonials';
import { featured } from '../content/featured';
import { work } from '../content/work';
import { involvement } from '../content/involvement';
import { workZh, involvementZh } from '../content/zh';
import { useLang } from '../i18n';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const Home = () => {
  const { t } = useLang();
  return (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <ExperienceAccordion id="work" heading={t('Work Experience', '工作经历')} items={t(work, workZh)} />
      <ExperienceAccordion id="experience" heading={t('Experience', '其他经历')} items={t(involvement, involvementZh)} />
      {featured.length > 0 && <Featured />}
      <Testimonials />
    </StyledMainContainer>
  </Layout>
  );
};

export default Home;
