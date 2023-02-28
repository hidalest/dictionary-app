import React, { useState } from 'react';
import searchIcon from '../../assets/images/icon-search.svg';
import './InputText.scss';

interface InputTextInterface {
  inputElement: {
    errorMessage: string;
  };

  getTextFromInput: (text: string) => void;
}

const InputText = ({ inputElement, getTextFromInput }: InputTextInterface) => {
  const { errorMessage } = inputElement;
  const [inputValue, setInputValue] = useState('');
  const [isFormValid, setIsFormValid] = useState<undefined | boolean>(
    undefined
  );

  const onSubmitSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === '') {
      setIsFormValid(false);
      return;
    }

    getTextFromInput(inputValue);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(true);
    setInputValue(e.target.value);
  };

  const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setIsFormValid(false);
    }
  };

  const errorMessageClass = isFormValid === false ? 'error' : '';
  return (
    <form className='inputTextBox--container' onSubmit={onSubmitSearchHandler}>
      <label htmlFor='inputTextBox' />
      <input
        type='text'
        name='inputTextBox'
        id='inputTextBox'
        className={`inputTextBox ${errorMessageClass}`}
        value={inputValue}
        onChange={onInputChange}
        onBlur={onBlurInput}
      />
      <button className='inputTextBox--icon' type='submit'>
        <img src={searchIcon} alt='search Icon' className='' />
      </button>

      {isFormValid === false && (
        <p className='inputTextBox--errorMessage'>{errorMessage}</p>
      )}
    </form>
  );
};

export default InputText;
