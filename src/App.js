
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Intro from './components/Intro';
import Process from './components/Process';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Process />
      <Blogs />
    </div>
  );
}

export default App;
