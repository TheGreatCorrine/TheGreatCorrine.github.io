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

/* 原来的 Contact 区块压缩成页脚上方的一小段 */
const StyledContact = styled.div`
  max-width: 560px;
  margin: 40px auto 90px;
  padding: 0 25px;

  .overline {
    display: block;
    margin: 0 0 14px;
    font-size: var(--fz-sm);
  }

  h2 {
    margin: 0 0 14px;
    font-family: var(--font-display);
    font-size: clamp(30px, 4vw, 40px);
  }

  p {
    margin: 0;
    font-size: var(--fz-lg);
  }

  .email-link {
    ${mixins.bigButton};
    margin-top: 36px;
  }
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
    <StyledContact id="contact">
      <p className="overline">What’s Next?</p>
      <h2>Get In Touch</h2>
      <p>Whether you have a question, an opportunity, or just want to say hi, my inbox is open.</p>
      <a className="email-link" href={`mailto:${siteConfig.email}`}>
        Say Hello
      </a>
    </StyledContact>
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
