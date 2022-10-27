import { useEffect, useState } from "react"

import './CartList.css'

const CartList = () => {

    let [cartList, setCartList] = useState()
    // let [count, setCount] = useState("")

    useEffect(() => {
        let z = localStorage.getItem("Ecart")
        z = JSON.parse(z)
        setCartList(z)
    }, [])
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let clearCart = () => {

        localStorage.clear("Ecart");
        window.location.reload();
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let increaseCount = (id, count) => {

        let Count = count + 1

        let x = localStorage.getItem("Ecart");
        x = JSON.parse(x);
        x.forEach((cart) => {
            if (cart.id == id) {
                cart.itemCount = Count;
            }
        })
        console.log(x);
        x = JSON.stringify(x);
        localStorage.setItem("Ecart", x);
        window.location.reload();

    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
let decreaseCount = (id, count) => {

        let Count = count - 1

        let x = localStorage.getItem("Ecart");
        x = JSON.parse(x);
        x.forEach((cart) => {
            if (cart.id == id) {
                cart.itemCount = Count;
            }
        })
        console.log(x);
        x = JSON.stringify(x);
        localStorage.setItem("Ecart", x);
        window.location.reload();

    }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let handleDelete = (index) => {
        let x = localStorage.getItem("Ecart");
        x = JSON.parse(x)
        x.splice(index,1)
        x = JSON.stringify(x);
        localStorage.setItem("Ecart", x);
        window.location.reload();

    }
    

    return (<div className="parent_cart">

        {cartList && cartList.map((list, index) => {
            return (<>
                <div className="cart_list" key={list.id}>

                    <div className="div_img">
                        <img height={100} width={150} src={list.image} alt="" />

                    </div>
                    <div className="title">
                    <h4>{list.title}</h4>
                    </div>

                    <div className="counter">

                        <div>
                            {list.itemCount <= 1 ? <img onClick={() => { handleDelete(index) }} height={20} src="https://img.icons8.com/metro/2x/delete.png" alt="" /> : <button onClick={() => { decreaseCount(list.id, list.itemCount) }} >-</button>}
                        </div>


                        <div className="count_number" >{list.itemCount}</div>

                        <div><button onClick={() => { increaseCount(list.id, list.itemCount) }} >+</button></div>
                    </div>
                    <h1>{Math.floor(list.itemCount * list.price)}.00</h1>
                </div>
                <hr />
            </>
            )
        })


        }

        <button id="clear_cart" onClick={clearCart}>Clear Cart</button>
<h1>{}</h1>
       
    </div>);
}

export default CartList;















