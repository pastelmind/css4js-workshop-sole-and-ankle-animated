import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const RollingNavLink = ({ children, ...delegated }) => {
  return (
    <Link {...delegated}>
      <BaseContent>{children}</BaseContent>
      <RollingContent>{children}</RollingContent>
    </Link>
  )
}

const Link = styled.a`
  --roll-transition: transform ease 300ms;
  --roll-transition-out-delay: 100ms;

  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const BaseContent = styled.div`
  transition: var(--roll-transition);
  transition-delay: var(--roll-transition-out-delay);

  ${Link}:focus &,
  ${Link}:hover & {
    transform: translateY(-100%);
    transition-delay: 0s;
  }
`;

const RollingContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);
  transition: var(--roll-transition);
  transition-delay: var(--roll-transition-out-delay);

  ${Link}:focus &,
  ${Link}:hover & {
    transform: translateY(0);
    transition-delay: 0s;
  }
`;

export default RollingNavLink;
