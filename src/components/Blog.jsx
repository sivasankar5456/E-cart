import Dispalyproducts from "./Dispalyproducts";
import useFetch from "./useFetch";



const Blog = () => {

    let { data: products, error } = useFetch("https://fakestoreapi.com/products");

    return (<div style={{ margin: 100 }}>
        < Dispalyproducts products={products} error={error} />

    </div>);
}

export default Blog;













