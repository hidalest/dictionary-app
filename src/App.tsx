import './App.scss';
import { useAppSelector } from './hooks/redux';
import HeaderNav from './layout/HeaderNav/HeaderNav';

function App() {
  const appTheme = useAppSelector((state) => state.theme.theme);
  const appFont = useAppSelector((state) => state.theme.font);

  return (
    <div className={`${'app'} ${appTheme} ${appFont}`}>
      <HeaderNav />
    </div>
  );
}

export default App;
