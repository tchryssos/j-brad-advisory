import { Box, IconButton as MUIIconButton, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { clearBodyLocks, lock, unlock } from 'tua-body-scroll-lock';

import { ABOUT_ROUTE, HOME_ROUTE } from '~/constants/routing';
import { getMediaQueryMinWidth } from '~/constants/theme';
import { useGetGutterSize } from '~/logic/hooks/layout';
import { pxToRem } from '~/logic/util/styles';

import { CloseIcon } from '../icons/CloseIcon';
import { HamburgerIcon } from '../icons/Hamburger';
import { Link } from '../Link';
import { ContactLink } from './ContactLink';

const BaseMenuComponent = styled(Box)`
  display: block;
  ${getMediaQueryMinWidth('md')} {
    display: none;
  }
`;

const FullWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.primary.light};
  z-index: 1000;
`;

const Menu = styled('ul')`
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

const MenuItem = styled('li')`
  padding: 0;
  margin: 0;
`;

// For some reason ActionIcon doesn't agree with styled and ts
// (probably because its polymorphic)
// so we just need to redefine some important props below
const IconButton = styled(MUIIconButton)`
  stroke: ${({ theme }) => theme.palette.text.primary};
  :hover,
  :active {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`;

const InnerIconButton = styled(IconButton)<{ gutter: string }>`
  position: absolute;
  top: ${pxToRem(16)};
  right: ${({ gutter }) => gutter};
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

interface FullMenuProps {
  isOpen: boolean;
  onClickClose: () => void;
}

function FullMenu({ isOpen, onClickClose }: FullMenuProps) {
  const gutterSize = useGetGutterSize();

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      unlock();
    }
    return () => {
      unlock();
      clearBodyLocks();
    };
  }, [isOpen]);

  return (
    <FullWrapper hidden={!isOpen} id={menuId}>
      <InnerIconButton
        aria-controls={menuId}
        gutter={gutterSize}
        onClick={onClickClose}
      >
        <CloseIcon />
      </InnerIconButton>
      <Menu>
        <LinkMenuItem href={HOME_ROUTE} title="Home" onClick={onClickClose} />
        <LinkMenuItem href={ABOUT_ROUTE} title="About" onClick={onClickClose} />
        <LinkMenuItem onClick={onClickClose} />
      </Menu>
    </FullWrapper>
  );
}

export function BaseMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
    // setScrollLocked(!isScrollLocked);
  };

  const onClickClose = () => {
    setIsOpen(false);
    // setScrollLocked(false);
  };

  return (
    <BaseMenuComponent display="flex">
      <IconButton
        aria-controls={menuId}
        aria-expanded={isOpen}
        id={menuButtonId}
        onClick={onToggle}
      >
        <HamburgerIcon />
      </IconButton>
      <FullMenu isOpen={isOpen} onClickClose={onClickClose} />
    </BaseMenuComponent>
  );
}
