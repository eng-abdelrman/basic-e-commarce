//component

// style
import '../css/app.css'
import '../css/nav.css'
// library 
import { Link } from 'react-router-dom';


export default function Navb() {
  return (
    <>
<header>
    <div className="container">
    <h1>Shop</h1>
    <nav>
        <ul>
            <li><Link className='go_home' to={'/'}>home</Link></li>
            <li>details</li>
        </ul>
    </nav>
    </div>
</header>
</>
  )
}



