import styled from '@emotion/styled';
import { ActionIcon, Flex } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';
import { pxToRem } from '~/logic/util/styles';

import { CloseIcon } from '../icons/CloseIcon';
import { HamburgerIcon } from '../icons/Hamburger';
import { Link } from '../Link';
import { ContactLink } from './ContactLink';

const BaseMenuComponent = styled(Flex)`
  display: block;
  ${getMediaQueryMinWidth('md')} {
    display: none;
  }
`;

const FullWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.cyan[0]};
  z-index: 100;
`;

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  height: 100%;
`;

const MenuItem = styled.li`
  padding: 0;
  margin: 0;
`;

// For some reason ActionIcon doesn't agree with styled and ts
// so we just need to redfine the important props here
interface CloseButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CloseButton = styled(ActionIcon)<CloseButtonProps>`
  position: absolute;
  top: ${pxToRem(16)};
  right: ${pxToRem(16)};
`;

const menuId = 'base-menu-id';
const menuButtonId = 'base-menu-button-id';

interface LinkMenuItemProps {
  href?: string;
  title?: string;
  onClick: () => void;
}

function LinkMenuItem({ href, title, onClick }: LinkMenuItemProps) {
  const isActive = useRouter().asPath === href;

  const isContact = !href && !title;

  return (
    <MenuItem onClick={isActive || isContact ? onClick : () => null}>
      {!isContact ? (
        <Link fontSize={32} href={href!}>
          {title}
        </Link>
      ) : (
        <ContactLink />
      )}
    </MenuItem>
  );
}

export function BaseMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrollLocked, setScrollLocked] = useScrollLock();

  const onToggle = () => {
    setIsOpen(!isOpen);
    setScrollLocked(!isScrollLocked);
  };

  const onClickClose = () => {
    setIsOpen(false);
    setScrollLocked(false);
  };

  return (
    <BaseMenuComponent>
      <ActionIcon
        aria-controls={menuId}
        aria-expanded={isOpen}
        id={menuButtonId}
        onClick={onToggle}
      >
        <HamburgerIcon />
      </ActionIcon>
      <FullWrapper hidden={!isOpen} id={menuId}>
        <CloseButton aria-controls={menuId} onClick={onClickClose}>
          <CloseIcon />
        </CloseButton>
        <Menu>
          <LinkMenuItem href={HOME_ROUTE} title="Home" onClick={onClickClose} />
          <LinkMenuItem
            href={ABOUT_ROUTE}
            title="About"
            onClick={onClickClose}
          />
          <LinkMenuItem onClick={onClickClose} />
        </Menu>
      </FullWrapper>
    </BaseMenuComponent>
  );
}
