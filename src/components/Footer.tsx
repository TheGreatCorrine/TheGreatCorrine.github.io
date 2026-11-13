import styled from 'styled-components';
import { siteConfig, socialMedia } from '../config';
import { mixins } from '../styles/mixins';
import { Icon } from './icons';

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--text);
  }

  ul {
    ${mixins.flexBetween};
    justify-content: center;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.6;

  a {
    padding: 4px 2px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        {socialMedia.map(({ name, url }) => (
          <li key={name}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
      </ul>
    </StyledSocialLinks>
    <StyledCredit>
      <div>Built by {siteConfig.name}</div>
      <div>
        Design inspired by{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang
        </a>
      </div>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
