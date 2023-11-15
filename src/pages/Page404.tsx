import image404 from '../assets/img/404.svg'
import { Link } from "react-router-dom"

const Page404 = () => {
  return (
      <div className="h-[68vh] lg:h-[60vh] 2xl:h-[68vh] flex flex-col justify-center items-center gap-5">
        <img src={image404} alt='Page not found'/>
        <Link to="/" className="btn">Go Home</Link>
      </div>
  )
}

export default Page404