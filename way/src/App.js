import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <SideBar />
      <Main />

    </div>
  );
}

export default App;
