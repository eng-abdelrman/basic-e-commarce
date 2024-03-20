// component 
import { useState } from 'react';
import { useEffect } from 'react';
// style
import '../css/showcard.css'
import '../css/app.css';
//library 
import { Link } from 'react-router-dom';


export default function Showcard() {
    const [product , setProduct] = useState([]);
    //get data
useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(res => setProduct(res))
},[])

  return (
    <>
    <section className='showcard'>
<div className="container">
    {/* start data */}
    {product.map((res ,i)=>{
        if(i >= 30){
        return false;
            }
        return(
        <>
        <div key={res.id} className='product'>

<div className='image_product'>
<img src={res.images} alt='wait' />
</div>
<div className='button_price_product'>
<p>{res.price} $</p>
<button > <Link className='button' to ={'/product/' + res.id}> Buy Item</Link></button>
</div>

        </div>
        </>

    )})}
    {/* end data */}
</div>
    </section>
    </>
  )
}
