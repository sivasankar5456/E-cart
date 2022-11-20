
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shope from './components/Shope';
import Shope1 from './components/Shope1';
import CartList from './components/CartList';
import Blog from './components/Blog';
import Search from './components/Search';
import Signup from './components/Signup';
import Login from './components/Login';
import Login1 from './components/Login1';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home:searchVal">
              <Home />
            </Route>

            <Route path="/shope1">
              <Shope1 />
            </Route>

            <Route exact path="/shop:id">
              <Shope />
            </Route>


            <Route path="/cartList">
              <CartList />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
            
            <Route path="/login">
              <Login1/>
            </Route>

            <Route path="/login:inputValue">
              <Login />
            </Route>
           

          </Switch>
        </div>
        <section>

          <Link to="/search">
            <div className='Search' >

              <img height={25} src="https://img.icons8.com/fluency-systems-regular/2x/search.png" alt="" />

            </div>
          </Link>

        </section>
      </Router>



    </>

  );
}

export default App;
