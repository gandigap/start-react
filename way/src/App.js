import './App.scss';
import Header from './components/Header/Header.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';

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
