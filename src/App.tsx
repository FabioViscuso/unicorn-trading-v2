import { useCallback, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Protected } from './components/navigation/Protected';
import { Header } from './components/navigation/Header';

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  /* Initialize the state with the contents of localstorage */
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { username: null, password: null, logged: false })

  useEffect(() => {
    const data = JSON.stringify(user)
    localStorage.setItem('user', data)
  }, [user])

  const syncUserState = () => {
    const data = JSON.parse(localStorage.getItem('user'))
    const { username, password } = data
    setUser({ ...user, username, password })
  }

  const setLogin = () => {
    setUser({ ...user, logged: true })
  }

  const setLogout = () => {
    setUser({ ...user, logged: false })
  }

  return (
    <div className="font-['Quicksand'] flex md:flex-row flex-col ">
      <Particles options={particlesOptions} init={particlesInit} />
      <Header user={user} syncUserState={syncUserState} setLogin={setLogin} setLogout={setLogout} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route element={<Protected user={user} />} >
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
