import logo from './logo.svg';
import './App.css';
import { ImageProvider } from './ImageProvider';

function App() {
  return (
    <div className="App">
      <ImageProvider>
        <div>Hello There!</div>
      </ImageProvider>
    </div>
  );
}

export default App;
