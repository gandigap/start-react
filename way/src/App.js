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
        <SideBar
          links={props.data.sidebarPage.sidebarLinks}
          friends={props.data.sidebarPage.sidebarFriends} />
        <main className='main'>
          <Route path='/profile' render={() => <Profile
            posts={props.data.profilePage.posts} />} />
          <Route path='/messages' render={() => <Dialogs
            dialogs={props.data.messagesPage.dialogs}
            messages={props.data.messagesPage.messages} />} />
          <Route path='/setting' render={() => <Setting />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
