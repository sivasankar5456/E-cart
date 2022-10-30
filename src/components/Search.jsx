import { useState } from "react";
import { Link } from "react-router-dom";

import './Search.css'



const Search = () => {

    let [searchVal, setSearchVal] = useState("shop")

    return (
    
    <section id="SearchPage" >

        <Link to="/">
            <div id="goBack" >
                <button>
                    ×
                </button>
            </div>
        </Link>

<center>

        <section id="searchDiv">
            <form action="">

            <input type="search" placeholder="Search by keyword" name="" id="" onChange={(e) => { setSearchVal(e.target.value) }} required />
        <Link to={`/home${searchVal}`}>
           
            <button type="submit">Search</button>
            </Link>
            </form>

        </section>
</center>
    </section>);
}

export default Search;