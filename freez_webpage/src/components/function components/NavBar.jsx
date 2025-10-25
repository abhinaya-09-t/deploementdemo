import './nav.css'

function Navbar(){

    return <nav className="nav">
        <img src="https://sample-website-pi.vercel.app/images/logo.png" alt="" />
        <div className="ch1">
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">BLOG</a></li>
                <li><a href="">CONTACT</a></li>
            </ul>
        </div>
    </nav>
}
export default Navbar