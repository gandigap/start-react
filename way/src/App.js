import logo from './logo.svg';
import './App.scss';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
      <Profile />

    </div>
  );
}

export default App;
