import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import HeaderNav from './layout/HeaderNav/HeaderNav';
import data from './data.json';
import { appActions } from './store/store';

const defaultFont =
  data.headerNav.fontDropdown.items.find((font) => font.defaultActive === true)
    ?.fontName || 'sans';

function App() {
  const appTheme = useAppSelector((state) => state.theme.theme);
  const appFont = useAppSelector((state) => state.theme.font);
  const dispatch = useAppDispatch();

  return (
    <div className={`${'app'} ${appTheme} ${appFont}`}>
      <div className='app_container'>
        <HeaderNav headerNav={data.headerNav} />
      </div>
    </div>
  );
}

export default App;
