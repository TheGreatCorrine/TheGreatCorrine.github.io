import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import { mixins } from '../styles/mixins';
import { navDelay } from '../utils';
import useMounted from '../hooks/useMounted';

const StyledMainContainer = styled.main`
  ${mixins.flexCenter};
  flex-direction: column;
  text-align: center;
`;

const StyledTitle = styled.h1`
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const NotFound = () => {
  const mounted = useMounted(navDelay);
  return (
    <Layout title="Page Not Found">
      <FadeIn show={mounted}>
        <StyledMainContainer className="fillHeight">
          <StyledTitle>404</StyledTitle>
          <StyledSubtitle>Page Not Found</StyledSubtitle>
          <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
      </FadeIn>
    </Layout>
  );
};

export default NotFound;
