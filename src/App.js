import logo from './logo.svg';
import './App.css';
import Allroutes from './AllRoutes/Allroutes';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
