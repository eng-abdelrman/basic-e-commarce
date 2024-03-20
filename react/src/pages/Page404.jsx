// component
import Footer from "../component/Footer";
import Navb from "../component/Navb";
// style
import '../css/page404.css'
// library

export default function Page404() {
  return (
    <>
    <div className="contain_not_found">
    <Navb/>
    <div className="container">
        <div className="par_of_notfound">
    <h2>404</h2>
    <p>page not found</p>
    </div>
        </div>
    <Footer/>
    </div>
    </>
  )
}
