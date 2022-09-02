import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Protected } from './components/navigation/Protected';
import { Header } from './components/navigation/Header';
import { ParticlesContainer } from './components/ui/ParticlesContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from './store/slices/login';

function App() {
  // run one time to check for existing auth data
  const dispatch = useDispatch();
  useEffect(() => {
    const localAuthData: { username: string, token: string } = JSON.parse(localStorage.getItem('authUser') as string)
    if (localAuthData && typeof localAuthData !== 'undefined') {
      dispatch(loginActions.login({ username: localAuthData.username, token: localAuthData.token }))
    }
  })

  return (
    <div className="font-['Quicksand'] flex md:flex-row flex-col ">
      <ParticlesContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route element={<Protected />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={
          <div>
            <h1>Not found!</h1>
            <Link to='/'>Back to home</Link>
          </div>
        } />
      </Routes>
    </div >
  );
}

export default App;
