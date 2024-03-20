//component

// style
import '../css/search.css'
import '../css/app.css'

// library
import { Link } from 'react-router-dom'
export default function Search() {
  return (
    <>
    <main>
        <div className="container">
        <Link style={{textDecoration:'none'}} to={'search/2'}><div className='card'><p>Electronics</p></div></Link>
        <Link style={{textDecoration:'none'}} to={"search/3"}><div className='card'><p>Furniture</p></div></Link>
        <Link style={{textDecoration:'none'}} to={'search/1'}><div className='card'><p>Clothes</p></div></Link>
        <Link style={{textDecoration:'none'}} to={'search/4'}><div className='card'><p>Shoes</p></div></Link>
        </div>
    </main>
    </>
  )
}
