import logo from "../assets/fellaz-logo.svg"

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-search.7918dd8e.svg" alt="" /></a></li>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-header-social.3facd93a.svg" alt="" /></a></li>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-header-options.c2f5b09c.svg" alt="" /></a></li>
                <li><a href="#" className="btn--sign-in">Sign In</a></li>
            </ul>

        </header>
    )
}