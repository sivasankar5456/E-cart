
import './Navbar.css';

import {Link} from 'react-router-dom'

const Navbar = () => {

    return ( 
    <>
    <nav>

        <div className="logos">
<div className="logo">
<img height={30} src="https://img.icons8.com/ios-filled/2x/old-vmware-logo.png" alt="" />
</div>
<h2>shophub</h2>
        </div>

        <div className="links">
            <b>

<ul>

<li><Link to="/">Home</Link></li>
<li><Link to="/shope1" >Shope</Link></li>
<li><Link to="/blog">Blog</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/login">Login</Link></li>
<li><Link to="/signup">Signup</Link></li>

</ul>
</b>

        </div>

        <div className="cartlogo">
<h4>$0</h4> 
<div className="div1" >
<Link to="/cartList">
<span aria-label="shopping cart" role="img"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg></span>
</Link>
</div>


<sup><div><h3>0</h3></div></sup>

        </div>
    </nav>
    <section>

    <Link to="/search">
<div className='Search' >
  
<img height={35} src="https://img.icons8.com/fluency-systems-regular/2x/search.png" alt="" />

</div>
</Link>
</section>

</>

     );
}
 
export default Navbar;



































