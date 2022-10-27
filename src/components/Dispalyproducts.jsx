import { Link } from 'react-router-dom'
import useFetch from "./useFetch";
import './Displalyproducts.css';
import { useEffect, useState } from 'react';


const Dispalyproducts = () => {

    let { data: products, error } = useFetch("https://fakestoreapi.com/products");
const [cart,setCart]=useState("")

useEffect(()=>{
    if(localStorage.getItem("Ecart")==null)
    {
        localStorage.setItem("Ecart","[]")
    }
    else{
        let x=localStorage.getItem("Ecart");
        x=JSON.parse(x)
        setCart(x)
    }
},[])


let handleCart=(product)=>{
    let x=localStorage.getItem("Ecart");
    x=JSON.parse(x)

   

    x.forEach((y)=>{
        if(y.id==product.id){
y.itemCount=y.itemCount+1
x=JSON.stringify(x)
localStorage.setItem("Ecart",x)
       
 }
 

})
x.push({id:product.id, itemCount:1, image:product.image,title: product.title, price:product.price})
x=JSON.stringify(x)
localStorage.setItem("Ecart",x)

   
}



    return (
        <section className="product_content">

            <div className='prodcut'>

            </div>

            {error && <h1>{error}</h1>}
            <div className='list_parent'>
                {products &&
                    products.map((product) => {
                        return (
                            <div className="list" key={product.id}>
                                <div className="open_details">
                                        <Link to={`/shop${product.id}`}>
                                    <div className="div2">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" className="svg-inline--fa fa-expand-arrows-alt fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>
                                    </div>
                                        </Link>

                                        <Link to="/cartList">
                                    <div className="div1" onClick={()=>{handleCart(product)}} >
                                            <span aria-label="shopping cart" role="img"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg></span>

                                    </div>
                                        </Link>

                                </div>
                                <center>

                                    <img height={100} src={product.image} alt="" />
                                    <h1>{product.title}</h1>
                                    <h3>${product.price}</h3>
                                </center>

                            </div>
                        )
                    })
                }
            </div>

        </section>
    );
}

export default Dispalyproducts;

















































// import { Link } from 'react-router-dom'
// import useFetch from "./useFetch";
// import './Displalyproducts.css';
// import { useEffect, useState } from 'react';


// const Dispalyproducts = () => {

//     let { data: products, error } = useFetch("https://fakestoreapi.com/products");
// const [cart,setCart]=useState("")

// useEffect(()=>{
//     if(localStorage.getItem("Ecart")==null)
//     {
//         localStorage.setItem("Ecart","[]")
//     }
//     else{
//         let x=localStorage.getItem("Ecart");
//         x=JSON.parse(x)
//         setCart(x)
//     }
// },[])


// let handleCart=(product)=>{
//     let x=localStorage.getItem("Ecart");
//     x=JSON.parse(x)

   

//     x.forEach((y)=>{
//         if(y.id==product.id){
// y.itemCount=y.itemCount+1
           
//  }

// })

// x.push({id:product.id, itemCount:1, image:product.image,title: product.title, price:product.price})
// x=JSON.stringify(x)
// localStorage.setItem("Ecart",x)

   
// }



//     return (
//         <section className="product_content">

//             <div className='prodcut'>

//             </div>

//             {error && <h1>{error}</h1>}
//             <div className='list_parent'>
//                 {products &&
//                     products.map((product) => {
//                         return (
//                             <div className="list" key={product.id}>
//                                 <div className="open_details">
//                                         <Link to={`/shop${product.id}`}>
//                                     <div className="div2">
//                                             <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" className="svg-inline--fa fa-expand-arrows-alt fa-w-14 fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>
//                                     </div>
//                                         </Link>

//                                         <Link to="/cartList">
//                                     <div className="div1" onClick={()=>{handleCart(product)}} >
//                                             <span aria-label="shopping cart" role="img"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg></span>

//                                     </div>
//                                         </Link>

//                                 </div>
//                                 <center>

//                                     <img height={100} src={product.image} alt="" />
//                                     <h1>{product.title}</h1>
//                                     <h3>${product.price}</h3>
//                                 </center>

//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </section>
//     );
// }

// export default Dispalyproducts;

