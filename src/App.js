import logo from './logo.svg';
import './App.css';
import ReacrDOM from "react-dom"
// import App from '../src/App.test'
import Routing from './Routing/Routing';
import {Provider} from "react-redux"
import store from '../src/Store/Store'
function App() {
  return (
    <>
    <Provider store={store}>
     <Routing/>
     </Provider>
    </>
  );
}

export default App;
