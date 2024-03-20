// component
import Navb from "../component/Navb";
import Footer from "../component/Footer";

// style

//library
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function Filterproducts() {
    const [produc , setProduct] =  useState([]);
    const category_of_product = useParams();
    
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category_of_product.category}`)
        .then(res => res.json())
        .then(res => setProduct(res))
    })
  return (
    <>
<Navb/>
<section className='showcard'>
<div className="container">
    {/* start data */}
    {produc.map((res ,i)=>{
if(i >= 13){
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
<Footer/>
    </>
  )
}
