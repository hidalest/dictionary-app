import React from 'react';
import icon from '../../assets/images/logo.svg';
import Dropdown from '../../ui/Dropdown/Dropdown';
import './HeaderNav.scss';

interface HeaderNavInterface {
  headerNav: {
    logo: {
      path: string;
      altText: string;
      title: string;
      href: string;
    };
    fontDropdown: {
      arrowIcon: string;
      items: Array<object>;
    };
  };
}

const HeaderNav = (props: HeaderNavInterface) => {
  const { headerNav } = props;
  const { path, altText, title, href } = props.headerNav.logo;
  return (
    <header className='appHeader'>
      <a href={href} title={title}>
        <img src={path} alt={altText} />
      </a>

      <div className='appHeader_actions'>
        <Dropdown fontDropdown={headerNav.fontDropdown} />
        <span className='appHeader_actions--divider' />
      </div>
    </header>
  );
};

export default HeaderNav;
