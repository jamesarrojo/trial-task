import { useState } from "react"
import logo from "../assets/fellaz-logo.svg"


export default function Navbar(props) {
    const [navbar, setNavbar] = useState(false)

    function changeBackground() {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? 'active' : ''}>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-search.7918dd8e.svg" alt="" /></a></li>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-header-social.3facd93a.svg" alt="" /></a></li>
                <li><a href="#"><img src="https://fellaz.xyz/img/icon-header-options.c2f5b09c.svg" alt="" /></a></li>
                <li><a className="btn--sign-in" onClick={props.onOpen}>Sign In</a></li>
            </ul>

        </nav>
    )
}