import Dropdown from '../../ui/Dropdown/Dropdown';
import Toggle from '../../ui/Toggle/Toggle';
import icon from '../../assets/images/logo.svg';
import './HeaderNav.scss';

interface HeaderNavInterface {
  headerNav: {
    logo: {
      altText: string;
      title: string;
      href: string;
    };
    fontDropdown: {
      items: Array<object>;
    };
  };
}

const HeaderNav = (props: HeaderNavInterface) => {
  const { headerNav } = props;
  const { altText, title, href } = props.headerNav.logo;
  return (
    <header className='appHeader'>
      <a href={href} title={title} className={'appHeader_logo'}>
        <img src={icon} alt={altText} />
      </a>

      <div className='appHeader_actions'>
        <Dropdown fontDropdown={headerNav.fontDropdown} />
        <span className='appHeader_actions--divider' />
        <Toggle className='appHeader_fontDropdown' />
      </div>
    </header>
  );
};

export default HeaderNav;
