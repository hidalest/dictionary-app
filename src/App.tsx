import './App.scss';
import { useAppSelector } from './hooks/redux';
import HeaderNav from './layout/HeaderNav/HeaderNav';
import data from './data.json';
import InputText from './ui/InputText/InputText';
import useGetFetch from './hooks/fetch';
import { API_URL } from './lib/api';
import Spinner from './ui/Spinner/Spinner';
import MainComponent from './layout/MainComponent/MainComponent';
import DefaultMessage from './layout/DefaultMessage/DefaultMessage';
import urlIcon from './assets/images/icon-new-window.svg';
import Footer from './layout/Footer/Footer';

function App() {
  const appTheme = useAppSelector((state) => state.theme.theme);
  const appFont = useAppSelector((state) => state.theme.font);
  const { sendRequest, fetchedData, isLoading, error } = useGetFetch();
  const defaultCopy =
    data.mainContent.mainContentElements[
      error ? 'noWordFound' : 'initialStatus'
    ];

  const fetchedDataAvailabe = fetchedData !== null;

  const getTextFromInputHandler = (text: string) => {
    sendRequest(API_URL, text);
  };

  return (
    <div className={`${'app'} ${appTheme} ${appFont}`}>
      <div className='app_container'>
        <HeaderNav headerNav={data.headerNav} />

        <main className='app_main'>
          <InputText
            inputElement={data.mainContent.inputElement}
            getTextFromInput={getTextFromInputHandler}
          />

          {isLoading && <Spinner />}
          {!fetchedDataAvailabe && !isLoading && (
            <DefaultMessage
              initialEmoji={defaultCopy.initalEmoji}
              initialHeader={defaultCopy.initialHeader}
              initialMessage={defaultCopy.initialMessage}
            />
          )}
          {fetchedDataAvailabe && <MainComponent fetchedWord={fetchedData} />}
        </main>
      </div>

      {fetchedDataAvailabe && (
        <Footer
          header={data.footer.footerHeader}
          url={fetchedData.sourceUrls[0]}
          urlIcon={urlIcon}
        />
      )}
    </div>
  );
}

export default App;
