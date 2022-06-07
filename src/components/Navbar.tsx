import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <header>

                        <h1>
                            <NavLink to="/">TRVL</NavLink>
                        </h1>
                        <i className='fab fa-typo3' />
                    </header>

                    <ul>
                        <li className="nav-item">
                            <NavLink to="/destinations"
                                className={({ isActive }) => isActive ? "underline" : ""}>
                                Destinations
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/experiences"
                                className={({ isActive }) => isActive ? "underline" : ""}>
                                Tailored Experiences
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/rentals"
                                className={({ isActive }) => isActive ? "underline" : ""}>
                                Private Rentals
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"
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
        </>
    )
}
