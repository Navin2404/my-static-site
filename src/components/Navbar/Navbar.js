import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">my site</h2>
           <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
           </ul>
        </nav>
    );
}

export default Navbar