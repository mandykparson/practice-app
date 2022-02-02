import './App.css';
import API from './Components/API';
import Counter from './Components/Counter';
import Header from './Components/Header';

function App() {
  return (
    <div className='App'>
      <Header/>
        <div className='Subs'>
          <div className='sub'>
            <Counter />
          </div>
          <div className='sub'>
            <API />
          </div>
        </div>
    </div>
  );
}

export default App;
