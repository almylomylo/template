import {useEffect} from 'react';
import {AppViewModel} from '@/features/app/viewModel/appViewModel';
import {RouterProvider} from 'react-router-dom';
import ErrorBoundary from '@/core/components/errorFallback/ErrorFallback';
import {routes} from '@/core/routes/routes';
import Icons from '@/core/assets/svg/icons.svg';
import '@/core/styles/main.scss';
import menu from '@/core/mockData/menu.json';
import {initializeApp} from '@/core/store/app/events';
import $appStore from '@/core/store/app/store';
import {useUnit} from 'effector-react';

function App() {
  // const {init} = AppViewModel();
  const appStore = useUnit($appStore);
  useEffect(() => {
    initializeApp(menu);
  }, []);

  return (
    <ErrorBoundary>
      <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
      <Icons />
    </ErrorBoundary>
  );
}

export default App;
