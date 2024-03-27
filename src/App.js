import './App.css';
import ColoredUserpic from './components/ColoredUserpic';
import ali from './assets/ali.jpg';

function App() {
  return (
    <div className="App">
     <ColoredUserpic 
     img={ali}
     size={150}
     margin="4"
     backgroundColor="red"
     colors={['green', 'blue']}
     hoverColors={['blue', 'green']}
     colorWidth={16}
     />
    </div>
  );
}

export default App;