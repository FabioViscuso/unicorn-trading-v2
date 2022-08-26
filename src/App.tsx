import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { Dashboard } from './pages/Dashboard';
import { Protected } from './components/navigation/Protected';
import { Header } from './components/navigation/Header';
import { ParticlesContainer } from './components/ui/ParticlesContainer';

function App() {
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
