import Dispalyproducts from "./Dispalyproducts";
import useFetch from "./useFetch";
import './Shop.css'
import { useParams } from "react-router-dom";
import { useState } from "react";
const Shope = () => {

const {id}=useParams();



    let { data: product, error } = useFetch("https://fakestoreapi.com/products/"+id);


    
    return (
        <section className="product_content">
<div className='home_backkground'></div>

          

            {error && <h1>{error}</h1>}
            <div className='Detalis'>
                {product &&
                  <div className="Detail">
                
                  <h1>{product.title}</h1>
                  <div className="detail_circle">
                    <center>

                  <img src={product.image} alt="" />
                  <h3>${product.price}</h3>
                    </center>
                  </div>
                 

              </div>
                }
            </div>
<Dispalyproducts/>
        </section>
    );
}
 
export default Shope;



