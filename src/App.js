import logo from './logo.svg';
import './App.css';

function App() {
  const products = [{name:'Laptop' , pric:5400},
                    {name:'Phone' , price:95000},
                    {name:'watch' , price:500},
                    {name:'tablet' , price:15000},



]
  return (
    <div className="App">
      {/* <Product name="Laptop" price="47000"></Product>
      <Product name="Phone" price="75000"></Product>
      <Product name="Watch" price="3000"></Product> */}
      {
        products.map(product => <Product name = {product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product (props) {
  return (
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <h4>Price:{props.price}</h4>
    </div>
  )
}
export default App;
