import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isActive, setIsActive] = useState<Boolean>(false);

    const toggleMobileMenu = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <nav>
            <div className="nav-container">
                <header>
                    <h1>
                        <NavLink to="/">
                            TRVL
                            <i className='fab fa-typo3' />
                        </NavLink>
                    </h1>

                    <span
                        onClick={toggleMobileMenu}
                        id="mobile-menu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                </header>

                <ul
                    style={{
                        display: isActive && "flex",
                        flexDirection: isActive && "column",
                        gap: isActive && "15px",
                        marginTop: isActive && "15px",
                    }}
                    className={isActive ? "mobile-menu" : ""}>

                    <li
                        className="nav-item hover-effect">
                        <NavLink to="/destinations"
                            onClick={() => isActive ? toggleMobileMenu() : ""}
                            className={({ isActive }) => isActive ? "underline" : ""}>
                            Destinations
                        </NavLink>
                    </li>

                    <li
                        className="nav-item hover-effect">
                        <NavLink to="/experiences"
                            onClick={() => isActive ? toggleMobileMenu() : ""}
                            className={({ isActive }) => isActive ? "underline" : ""}>
                            Tailored Experiences
                        </NavLink>
                    </li>

                    <li
                        className="nav-item hover-effect">
                        <NavLink to="/rentals"
                            onClick={() => isActive ? toggleMobileMenu() : ""}
                            className={({ isActive }) => isActive ? "underline" : ""}>
                            Private Rentals
                        </NavLink>
                    </li>

                    <li
                        className="nav-item hover-effect">
                        <NavLink to="/about"
                            onClick={() => isActive ? toggleMobileMenu() : ""}
                            className={({ isActive }) => isActive ? "underline" : ""}>
                            About us
                        </NavLink>
                    </li>
                </ul>

                <div className="navbar-icons">
                    <div className="navbar-icon">
                        <img src="/images/search.svg" alt="" />
                    </div>
                    <div className="navbar-icon">
                        <img src="/images/heart.svg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
