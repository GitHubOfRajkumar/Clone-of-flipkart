import { Product_Failure, Product_Request, Product_Success } from "./actionTypes"
import axios from "axios"




export const get_product_request = ()=>{
    return {type:Product_Request}
}


export const get_product_success = (payload)=>{
    return {type:Product_Success,payload}
}


export const  get_product_failure = ()=>{
    return {type:Product_Failure}
}

export const getproducts = (params)=>(dispatch)=>{
    dispatch(get_product_request());
    axios.get(`https://jsonplaceholder.typicode.com/users`,params).then((res)=>dispatch(get_product_success(res.data)))
    .catch((err)=>dispatch(get_product_failure()))
}

// export const getProducts = (params) => (dispatch) => {
//     console.log("getProducts function is called");
//     dispatch(get_product_request());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users", params)
//       .then((res) => {
//         console.log("Request successful:", res.data);
//         dispatch(get_product_success(res.data));
//       })
//       .catch((err) => {
//         console.error("Request failed:", err);
//         dispatch(get_product_failure());
//       });
//   };
