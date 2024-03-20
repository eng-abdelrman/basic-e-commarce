// component
import { useEffect, useState } from "react"
import { useParams } from "react-router"
//style
import '../css/productshow.css'
//library

export default function Product() {
    const [ contain_product , setContain_product ] = useState({});
    const name_product = useParams();

    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${name_product.id}`)
        .then(res => res.json())
        .then(res => setContain_product(res))
    },[])
  return (
    <>
    <div className="header_of_product">
    <div key={contain_product.id} className="container">
        <div  className="card_of_product">
        <div className="image_of_product">
          <img src={contain_product.images} />
        </div>
        <div className="body_of_buy">
        <input type="text"  placeholder="enter code to buy"/>
        <button>buy</button>
        </div>
        </div>
        </div>
    </div>
      
    </>
  )
}
