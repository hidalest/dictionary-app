import './Toggle.scss';
import moonIcon from '../../assets/images/icon-moon.svg';
import { useAppDispatch } from '../../hooks/redux';
import { appActions } from '../../store/store';
import React from 'react';

const Toggle = () => {
  const dispatch = useAppDispatch();

  const toggleThemeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDarkMode = e.target.checked;

    if (isDarkMode) {
      dispatch(appActions.changeTheme('dark'));
    } else {
      dispatch(appActions.changeTheme('light'));
    }
  };
  return (
    <div className='toggle'>
      <span className='material-symbols-outlined toggle_icon'>light_mode</span>
      <label className='switch'>
        <input type='checkbox' onChange={toggleThemeHandler} />
        <span className='slider round'></span>
      </label>
      <span className='material-symbols-outlined toggle_icon'>dark_mode</span>
    </div>
  );
};

export default Toggle;
