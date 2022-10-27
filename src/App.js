
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shope from './components/Shope';
import Shope1 from './components/Shope1';
import CartList from './components/CartList';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <Router>
    <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home  />
          </Route>
          <Route path="/shope1">
          <Shope1/>
          </Route>

          <Route exact path="/shop:id">
          <Shope/>
          </Route>
         

        

          <Route path="/cartList">
          <CartList/>
          </Route>
          <Route path="/blog">
          <Blog/>
          </Route>


        </Switch>

    </div>
      </Router>



    </>

  );
}

export default App;
