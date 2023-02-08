import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import HeaderNav from './layout/HeaderNav/HeaderNav';
import data from './data.json';
import InputText from './ui/InputText/InputText';
import useGetFetch from './hooks/fetch';
import { useEffect } from 'react';
import { API_URL } from './lib/api';
import { appActions } from './store/store';

function App() {
  const appTheme = useAppSelector((state) => state.theme.theme);
  const appFont = useAppSelector((state) => state.theme.font);
  const searchedWord = useAppSelector((state) => state.theme.searchedWord);
  const dispatch = useAppDispatch();
  const { sendRequest, fetchedData, isLoading } = useGetFetch();

  const getTextFromInputHandler = (text: string) => {
    sendRequest(API_URL, text);
    dispatch(appActions.changeSearchedWord(fetchedData));
  };

  console.log(searchedWord);

  return (
    <div className={`${'app'} ${appTheme} ${appFont}`}>
      <div className='app_container'>
        <HeaderNav headerNav={data.headerNav} />

        <main className='app_main'>
          <InputText
            inputElement={data.mainContent.inputElement}
            getTextFromInput={getTextFromInputHandler}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
