import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <SideBar />
        <main className='main'>
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/setting' render={() => <Setting />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
