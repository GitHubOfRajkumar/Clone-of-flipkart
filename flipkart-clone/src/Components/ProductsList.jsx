import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_product_success, getproducts } from '../Redux/ProductReducer/action';

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
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
