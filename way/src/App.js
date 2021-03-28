import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <SideBar />
        <main className='main'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/setting' component={Setting} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
