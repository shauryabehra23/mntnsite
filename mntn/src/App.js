import './App.css';
import Nav from './components/Nav';
import Headers from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Combo from './components/Combo';

function App() {
  return (
    <div className="Apps">
      <Combo/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
