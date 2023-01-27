import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appActions } from '../../store/store';
import { getFontFullName } from '../../utils/functions';
import './Dropdown.scss';

interface DropdownInterface {
  fontDropdown: {
    arrowIcon: string;
    items: Array<object>;
  };
}
interface DropdownContainerInterface {
  children: React.ReactNode;
  arrowIcon: string;
}

interface DropdownElementsInterface {
  items: Array<any>;
}

const DropdownContainer = (props: DropdownContainerInterface) => {
  const currentFont = useAppSelector((state) => state.theme.font);

  const [activeDropdown, setActiveDropdown] = useState('closed');
  const { children, arrowIcon } = props;

  const activeDropdownHandler = () =>
    setActiveDropdown(activeDropdown == 'closed' ? 'open' : 'closed');

  const currentFullFontName = getFontFullName(currentFont);
  return (
    <button
      className={`dropdown ${activeDropdown}`}
      onClick={activeDropdownHandler}
    >
      <span className='dropdown-btn'>
        {currentFullFontName}
        <img
          src={arrowIcon}
          alt='arrow icon dropdown'
          className={`dropdown-icon`}
        />
      </span>
      {children}
    </button>
  );
};

const DropdownElements = (props: DropdownElementsInterface) => {
  const { items } = props;
  const dispatch = useAppDispatch();
  const [fontSelected, setFontSelected] = useState('');

  const fontSelectedHandler = (e: any) =>
    dispatch(appActions.changeFont(e.target.classList[1]));

  return (
    <div className='dropdown_container'>
      {items.map((item, index) => (
        <option
          key={`font-item-id-${index}`}
          className={`dropdown_container-item ${item.fontName}`}
          onClick={fontSelectedHandler}
        >
          {item.fontFullName}
        </option>
      ))}
    </div>
  );
};

const Dropdown = ({ fontDropdown }: DropdownInterface) => {
  const { arrowIcon, items } = fontDropdown;
  return (
    <DropdownContainer arrowIcon={arrowIcon}>
      <DropdownElements items={items} />
    </DropdownContainer>
  );
};

export default Dropdown;
