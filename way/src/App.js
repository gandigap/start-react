import './App.scss';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Setting from './components/Setting/Setting';
import News from './components/News/News';
import Music from './components/Music/Music';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import { compose } from "redux";
import Preloader from './components/common/preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='wrapper'>
          <HeaderContainer />
          <SidebarContainer />
          <main className='main'>
            <figure>
              <img className="main__hat-logo" src='/assets/icons/main-img.svg' alt="" />
            </figure>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/messages' render={() => <DialogsContainer />} />
            <Route path='/setting' render={() => <Setting />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </main>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

/* links={props.state.sidebarPage.sidebarLinks}
        friends={props.state.sidebarPage.sidebarFriends} */