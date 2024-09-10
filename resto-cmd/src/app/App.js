import { Provider } from 'react-redux'
import { store } from './store';
import './App.css';
import { Cart } from '../features/cart/Cart';
import { Voucher } from '../features/voucher/Voucher';
import { Total } from '../features/total/Total';
import { Owner } from '../features/owner/Owner';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
        <Total />
        <Voucher />
        <Owner />
      </div>
    </Provider>
  );
}

export default App;