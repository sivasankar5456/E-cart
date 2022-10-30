
import { useParams } from 'react-router-dom';
import Dispalyproducts from './Dispalyproducts';
import './Home.css';


const Home = () => {
   
    let {searchVal}=useParams();

    return (
<section className='Home_Content' >
<div id='home_backkground'>

<section className='search_content'>

    <div>
<span>Home</span> /Shop
    </div>

    <div>  
        <h1> {searchVal=!searchVal ? "Shop" :searchVal}</h1>
    </div>
<center>

    <div>
    <p>
    Showing 1-12 of 36 results
    </p>
        <select name="" id="">
            <option value="">Default sorting</option>
            <option value="">Latest</option>
            <option value="">Ascending</option>
            <option value="">Descending</option>
        </select>
    </div>
    </center>

</section>

</div>

<div className="disply_products1">

< Dispalyproducts />
</div>
<div className="disply_products2">
<h2>Related Products</h2>

< Dispalyproducts />
</div>

</section>
      
    );
}

export default Home;














 



















