import Image from 'next/image'
import logo from './assets/logo.png'
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
        <nav style={{background : 'linear-gradient(176deg,rgb(18,24,27) 50%,rgb(32,39,55) 100%)'}}  className="navbar navbar-expand-lg navbar-light">
  <Link href='/' className="navbar-brand" >
  <Image src={logo} alt="ummi code logo" width={40} height={40} style={{borderRadius : '50%'}}/>
  </Link>
        
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul style={{}} className="navbar-nav mr-auto">
    
      <li  className="nav-item">
        <Link style={{color:'whitesmoke'}} className="nav-link" href="/blogs">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link style={{color:'whitesmoke' }} className="nav-link" href="/contact">Contact Us</Link>
      </li>
    </ul>
   
  </div>
</nav>

    </div>
  )
}
