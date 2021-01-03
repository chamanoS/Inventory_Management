import React from 'react'
import './App.css';
import StockEventsTable from './components/StockEventsTable';

const fetchedProducts = [
  {id:1, name:"Product first"},
  {id:2, name:"Product second"}
]

const fetchedStockEvents = [
  {id:1, type:'add',qty:100,product:fetchedProducts[0]},
  {id:2, type:'remove',qty:-1000,product:fetchedProducts[0]},
  {id:3, type:'add',qty:10,product:fetchedProducts[0]},
  {id:4, type:'remove',qty:-200,product:fetchedProducts[1]},
  {id:5, type:'add',qty:20,product:fetchedProducts[1]}
]

function App() {
  return (
   <div className="App">
     <h1>The Stock App</h1>
     <StockEventsTable products={fetchedProducts}
        stockEvents={fetchedStockEvents} />
   </div>
  );
}

export default App;
