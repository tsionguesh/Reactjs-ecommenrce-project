import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import{Switch ,Route, BrowserRouter} from 'react-router-dom';
import Products from './components/Products';
import Contact from './components/Contact';


function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route  path="/" exact={true} component ={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:_id" component={Products} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      
    </BrowserRouter>
  )
}
export default App; 