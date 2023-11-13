import React from 'react'
import "../Css/ProductsCard.css"
import Button from './Button'
import ButtonChakra from './Button'
import "../Css/Button2.css"
import { Button2 } from './Button2'
const ProductsCard = ({name,username,email,address,onSubmit, showLoader}) => {
  // console.log(name,username,email,address)
  return (
    <div className='container1'>
      <p>{name}</p><br/>
      <p>{username}</p><br/>
      <p>{email}</p><br/>
      <p>{address.street}</p>
      <div style={{display:"grid",gridTemplateColumns:"30% 1fr 30%",alignItems:"baseline",gap:"10px",paddingLeft:"10px",paddingRight:"10px"}}>
      <Button2 text="Submit" onSubmit={onSubmit} loading={showLoader} disabled={showLoader} />

       <ButtonChakra/>
       <Button2 text="View" onSubmit={onSubmit} loading={showLoader} disabled={showLoader} />

      </div>
     </div>
  )
}

export default ProductsCard