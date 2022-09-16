import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Protected } from './components/navigation/Protected';
import { Header } from './components/navigation/Header';
import { ParticlesContainer } from './components/ui/ParticlesContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from './store/slices/login';
import { Page404 } from './pages/Page404';
import { useUI } from './utils/useUI'
import RenderedNotificationPopup from './components/ui/NotificationPopup';

function App() {
  // run one time to check for existing auth data
  const dispatch = useDispatch();
  const { isNotificationVisible, resetNotification } = useUI()

  useEffect(() => {
    const localAuthData: { username: string, token: string } = JSON.parse(localStorage.getItem('authUser') as string)
    if (localAuthData && typeof localAuthData !== 'undefined') {
      dispatch(loginActions.login({ username: localAuthData.username, token: localAuthData.token }))
    }
  })

  useEffect(() => {
    const id = setTimeout(() => {
      resetNotification()
    }, 5000)

    return () => {
      clearTimeout(id)
    }
  }, [isNotificationVisible, resetNotification])

  return (
    <div className="font-['Quicksand'] flex md:flex-row flex-col ">
      {isNotificationVisible && <RenderedNotificationPopup />}
      <ParticlesContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route element={<Protected />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div >
  );
}

export default App;
