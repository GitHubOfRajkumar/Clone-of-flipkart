import { Product_Failure, Product_Request, Product_Success } from "./actionTypes"


const initialMovie = {
  isLoading: false,
  isError: false,
  products: [],
}



export const reducer = (state=initialMovie,{type,payload})=>{
    switch(type){
        case Product_Request:
            return{
                ...state,isLoading:true,isError: false,
            };
        case Product_Failure:
            return {
                ...state,isLoading:false,isError:true
            };
        case Product_Success:
            return{
                ...state,isLoading:false,products:payload
            }

        default:
            return state;
    }
}