// component
import Navb from '../component/Navb';
import Search from '../component/Search';
import Showcard from '../component/Showcard';
import Footer from '../component/Footer';
// style
import '../css/app.css'

export default function Loading() {
  return (
    <>
    <div className='screen'>
    <Navb/>
    <Search/>
    <Showcard/>
    <Footer/>
    </div>
    </>
  )
}
