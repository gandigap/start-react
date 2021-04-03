import './App.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import SideBar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar
        links={props.state.sidebarPage.sidebarLinks}
        friends={props.state.sidebarPage.sidebarFriends} />
      <main className='main'>
        <figure>
          <img className="main__hat-logo" src='/icons/main-img.svg' alt="" />
        </figure>
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          dispatch={props.dispatch}
        />} />
        <Route path='/messages' render={() => <Dialogs
          dialogs={props.state.messagesPage.dialogs}
          messages={props.state.messagesPage.messages}
          dispatch={props.dispatch}
        />} />
        <Route path='/setting' render={() => <Setting />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
      </main>
    </div>

  );
}

export default App;
