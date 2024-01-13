import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/Store';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <div className='left'><Left /></div>
        <div className='right'><Right /></div>
      </div>
    </Provider>
  );
}

export default App;
