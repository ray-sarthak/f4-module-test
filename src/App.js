
import './App.css';
import Pincode from './components/Pincode';
import Display from './components/Display';
import { Provider } from 'react-redux';
import store from './redux/app/store';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
        <Routes>
    <Route path="/" element={<Pincode/>}/>
    <Route path="/display" element={<Display/>}/>
    <Route path="/error" element={<Error/>}/>
     </Routes>
     </Router>
     </Provider>
    </div>
  );
}

export default App;
