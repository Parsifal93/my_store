import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../../redux/actions/productActions';
import Product from '../../components/Product';
import {BsToggles } from "react-icons/bs";
import './index.css';

const HomeScreen = () => {
const [list, setList] = useState(true);

    const dispatch = useDispatch();
  
    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
  
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
  
    return (
      <div className="homescreen">
        <h2 className="homescreen__title">Latest Products</h2>
        <div>
    
        <BsToggles onClick={() => setList(!list)}/>
      
        </div>
        <div className= {list ? "grid" : "list"} >
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default HomeScreen;
