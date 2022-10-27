
import Dispalyproducts from './Dispalyproducts';
import './Home.css';


const Home = () => {
   
    
    return (
<section className='Home_Content' >
<div className='home_backkground'></div>

<div className="disply_products1">

< Dispalyproducts />
</div>
<div className="disply_products2">
<center>
<h2>Related Products</h2>
</center>

< Dispalyproducts />
</div>

</section>
      
    );
}

export default Home;














 



















