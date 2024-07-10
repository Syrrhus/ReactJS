import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Container } from '@mui/material';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

function App() {

  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      {/* <Counter /> */}
      {/* <Message></Message> */}
      {/* <Greet name = "Bruce" otherName = "Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" otherName = "Superman">
        <button>button</button>
      </Greet>
      <Greet name = "Diana" otherName = "Wonder Woman"/> */}
      {/* <Welcome></Welcome> */}
      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;
