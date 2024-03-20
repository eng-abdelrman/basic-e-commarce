// component 
import Filterproducts from './pages/Filterproducts';
import Loading from './pages/Loading';
import Page404 from './pages/Page404';
import Product from './pages/Product';
//library & framework
import {Routes , Route } from 'react-router'
import { BrowserRouter  } from 'react-router-dom';

function App() {
return(
  <>

<BrowserRouter>
<Routes>
<Route path = '/' element={<Loading/>} />
<Route path = 'product/:id' element={<Product/>}/>
<Route path='search/:category' element={<Filterproducts/>}/>
{/* page not found */}
<Route path = '*' element={<Page404/>} />

</Routes>
</BrowserRouter>

    </>
  )
}

export default App
