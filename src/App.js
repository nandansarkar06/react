import logo from './logo.svg';
import './App.css';
import UseStateExample from './comonent/useStateExample';
import UseStateObject from './comonent/UseStateObject';
import TitleMessage from './comonent/TitleMessage';
import MouseContainer from './comonent/MouseContainer';
import FetchData from './comonent/FetchData';
import CountReducer from './comonent/CountReducer';
import RootComponent from './comonent/contextReducer/RootComponent';
import UseStateFetchData from './comonent/UseStateFetchData';
import UseReducerFetch from './comonent/UseReducerFetch';
import UseMemoExample from './comonent/UseMemoExample';

function App() {
  return (
    <div className="App">
      {/* <UseStateExample />
      <UseStateObject />
      <TitleMessage /> */}
      {/* <MouseContainer /> */}
      {/* <FetchData /> */}
      {/* <CountReducer /> */}
      {/* <RootComponent /> */}
      {/* <UseStateFetchData /> */}
      {/* <UseReducerFetch /> */}
      <UseMemoExample />
    </div>
  );
}

export default App;
