import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    // <div className="App">
    // </div>
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Shopping app</h1>
          <div className='row mt-3'>
            <div className='col-sm'>
              <CartValue />
              </div>
            <div className='col-sm'>
              <Location />
            </div>
            </div>
            <h3 className='mt-3'>Shoping cart</h3>
          <div className='col-sm'>
              <ExpenseList />
          </div>
          <h3 className='mt-3'>Add items</h3>
            <div className='row '>
              <div className='col-sm'>
                <ItemSelected />
              </div>
            </div>
      </div>
    </AppProvider>
  );
}

export default App;