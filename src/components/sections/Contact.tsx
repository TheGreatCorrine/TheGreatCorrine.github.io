import { useRef } from 'react';
import styled from 'styled-components';
import { contact } from '../../content/contact';
import { siteConfig } from '../../config';
import { mixins } from '../../styles/mixins';
import useReveal from '../../hooks/useReveal';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--accent-text);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-family: var(--font-display);
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef<HTMLElement>(null);
  useReveal([revealContainer]);

  return (
    <StyledContactSection id="contact" ref={revealContainer} tabIndex={-1}>
      <h2 className="numbered-heading overline">{contact.overline}</h2>
      <h2 className="title">{contact.title}</h2>
      <p>{contact.text}</p>
      <a className="email-link" href={`mailto:${siteConfig.email}`}>
        {contact.button}
      </a>
    </StyledContactSection>
  );
};

export default Contact;
