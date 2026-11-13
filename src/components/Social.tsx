import styled from 'styled-components';
import { socialMedia } from '../config';
import Side from './Side';
import { Icon } from './icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--text-muted);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }: { isHome: boolean }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia.map(({ url, name }) => (
        <li key={name}>
          <a
              href={url}
              aria-label={name}
              {...(url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
            <Icon name={name} />
          </a>
        </li>
      ))}
    </StyledSocialList>
  </Side>
);

export default Social;
