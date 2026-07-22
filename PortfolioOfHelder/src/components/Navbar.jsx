

const Navbar = () => {
 return(
    
    <header className="bg-base-100  sticky top-0 z-50"> 
             <div className="navbar bg-base-100 max-w-5xl mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Helder Lagrisola</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a className="bg-gray-900 text-white rounded-2xl mx-5 hover:bg-white hover:text-black hover:shadow-sm">About Me</a></li>
      <li>
        <details>
  <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden after:hidden marker:content-none">
  <i className="fa-solid fa-bars"></i>
</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </header>
 
 )
}

export default Navbar;