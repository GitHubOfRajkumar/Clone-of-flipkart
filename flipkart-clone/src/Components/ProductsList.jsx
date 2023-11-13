import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_product_success, getproducts } from '../Redux/ProductReducer/action';
import ProductsCard from './ProductsCard';
import "../Css/ProductList.css"
const ProductsList = () => {

  const dispatch = useDispatch()
  const { products, isLoading, isError } = useSelector((store) => ({
    products: store.productReducer.products,
    isLoading: store.productReducer.isLoading,
    isError: store.productReducer.isError,
  }));

  console.log("Redux State:", useSelector((store) => store.productReducer));


  console.log("products", products);
  useEffect(()=>{
    dispatch(getproducts())
  },[])
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <div>
      <h2>Products List</h2>

      <div className='container2'>

      {
        products.map((el)=>{
          return (
            <ProductsCard className='container' key={el.id} {...el} />
            )
          })
        }
        </div>
    </div>
  );
};

export default ProductsList;
