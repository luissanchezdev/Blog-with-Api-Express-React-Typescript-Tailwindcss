import { Link } from "react-router-dom"

const Header = () => {

  const handleMenuMobile = () => {   
      const containerMenuMobile = document.querySelector('.container-menu-mobile')
      containerMenuMobile?.classList.toggle('hidden')
  }

  const handleCloseMenuMobile = () => {
      const containerMenuMobile = document.querySelector('.container-menu-mobile')
      containerMenuMobile?.classList.toggle('hidden')
  }

  return (
    <header className="flex flex-row justify-center items-center mx-auto py-5">
        <Link to="/" className="flex flex-row items-center w-full">
          <h1 className="font-bold color-[#4d4d4d] text-sm md:text-xl uppercase w-4/5 text-left">Tech Blog</h1>
        </Link>
        <nav className='menu hidden lg:block w-1/5 lg:w-full mx-auto'>
          <ul className="flex justify-end items-center gap-5 my-5">
            <li className="menu-items">
              <Link to="/" className="menu-items-links text-lg">Home</Link>
            </li>
            <li className="menu-items">
              <Link to="/blog" className="menu-items-links text-lg">Blog</Link>
            </li>
            <li className="menu-items">
              <Link to="" className="menu-items-links text-lg">Contact</Link>
            </li>
          </ul>
        </nav>
        <nav className='menu-mobile block lg:hidden w-1/5'>
          <button type="button" onClick={ handleMenuMobile } className="font-bold text-gray-700 p-2" id="menu-mobile">Menu</button>
          <div className="container-menu-mobile hidden absolute left-0 top-0 h-screen w-full bg-[#282828] transition-all duration-500 z-50">
            <ul className='flex flex-col justify-center items-center w-full- h-full pt-5'>
              <div className="flex justify-start w-full">
                <button onClick={ handleCloseMenuMobile } type='button' className="w-full text-left px-10 py-2 text-4xl text-white" id="close-menu">X</button>
              </div>
              <div className="flex flex-col justify-start w-full h-full py-16 px-10">
                <li className="menu-mobile-items">
                  <Link to="" className="menu-mobile-items-links">Home</Link>
                </li>
                <li className="menu-mobile-items">
                  <Link to="" className="menu-mobile-items-links">Blog</Link>
                </li>
              </div>
              <div className="flex flex-col justify-end w-full h-full py-16 px-10">
                <li className="w-full text-left py-3s">
                  <Link to="" className="text-[#2d2d2d] text-xl font-bold py-2 px-5 inline-block bg-white w-full">Contact</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header