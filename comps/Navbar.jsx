import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><Image src="/logo.png" width={150} height={150}/></Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/devs"><a>Dev Listing</a></Link>
    </nav> 
  );
}
 
export default Navbar;