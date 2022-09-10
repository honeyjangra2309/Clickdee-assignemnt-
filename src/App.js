
import './App.css';
import Blogs from './components/Blogs';
import Customer from './components/Customer';
import Footer from './components/Footer';
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
      <Customer />
      <Footer />
    </div>
  );
}

export default App;
