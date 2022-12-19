import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp'
import { List } from './List';

function App() {
  return (
    <div className='app'>
      <div className='leftImg'>
      <img src={ image } width="200px" alt=''/>
      </div>
      <h1>Лист покупок</h1>
      <List />
      <div className='rightImg'>
      <img src={ imageTwo } width="200px" alt='' />
      </div>
    </div>
  );
}

export default App;
