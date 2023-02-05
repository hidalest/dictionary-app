import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import HeaderNav from './layout/HeaderNav/HeaderNav';
import data from './data.json';
import InputText from './ui/InputText/InputText';
import useGetFetch from './hooks/fetch';
import { useEffect } from 'react';
import { API_URL } from './lib/api';

function App() {
  const appTheme = useAppSelector((state) => state.theme.theme);
  const appFont = useAppSelector((state) => state.theme.font);
  const dispatch = useAppDispatch();
  const { sendRequest } = useGetFetch();

  useEffect(() => {
    sendRequest(API_URL, 'keyboard');
  }, []);

  return (
    <div className={`${'app'} ${appTheme} ${appFont}`}>
      <div className='app_container'>
        <HeaderNav headerNav={data.headerNav} />

        <main className='app_main'>
          <InputText inputElement={data.mainContent.inputElement} />
        </main>
      </div>
    </div>
  );
}

export default App;
