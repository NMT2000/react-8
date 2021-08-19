import './App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed'
import Widget from './components/Widget/Widget'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function App() {
  return (
    <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
        <div className="btn__messerger">
          <button className="btn__messerger--icon">
            <i class='bx bx-edit'></i>
          </button>
        </div>
    </div>
  );
}

export default App;
