import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import SidebarContainer from './components/Sidebar/SidebarContainer';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <SidebarContainer />
      <main className='main'>
        <figure>
          <img className="main__hat-logo" src='/icons/main-img.svg' alt="" />
        </figure>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/messages' render={() => <DialogsContainer />} />
        <Route path='/setting' render={() => <Setting />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
      </main>
    </div>

  );
}

export default App;
/* links={props.state.sidebarPage.sidebarLinks}
        friends={props.state.sidebarPage.sidebarFriends} */