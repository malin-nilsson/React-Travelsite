import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="nav-footer-wrapper">
                <section className="nav-footer-destinations">
                    <Link to="destinations" className="nav-footer-header">Destinations</Link>
                    <ul>
                        <li className="nav-footer-link">
                            UK
                        </li>
                        <li className="nav-footer-link">
                            Africa
                        </li>
                        <li className="nav-footer-link">
                            Greece
                        </li >
                        <li className="nav-footer-link">
                            Asia
                        </li>
                        <li className="nav-footer-link">
                            Exotic Islands
                        </li>
                        <li className="nav-footer-link">
                            The Americas
                        </li>
                        <li className="nav-footer-link">
                            Scandinavia
                        </li>
                    </ul>
                </section>

                <section className="nav-footer-experiences">
                    <Link to="experiences" className="nav-footer-header">Tailored experiences</Link>
                    <ul>
                        <li className="nav-footer-link">
                            Adventure
                        </li>
                        <li className="nav-footer-link">
                            Culinary
                        </li>
                        <li className="nav-footer-link">
                            Celebration
                        </li>
                        <li className="nav-footer-link">
                            Family
                        </li>
                        <li className="nav-footer-link">
                            Voyages
                        </li>
                        <li className="nav-footer-link">
                            Speciality
                        </li>
                        <li className="nav-footer-link">
                            Ultralux
                        </li>
                    </ul>
                </section>

                <section className="nav-footer-rentals">
                    <Link to="rentals " className="nav-footer-header">Private Rentals</Link>
                    <ul>
                        <li className="nav-footer-link">Castles</li>
                        <li className="nav-footer-link">Estates</li>
                        <li className="nav-footer-link">Villas & houses</li>
                    </ul>
                </section>
                <section className="nav-footer-about">
                    <Link to="about" className="nav-footer-header">About us</Link>
                    <ul>
                        <li className="nav-footer-link">Meet the team</li>
                    </ul>
                </section>

                <section className="nav-footer-contact">
                    <p className="nav-footer-logo">TRAVL <i className='fab fa-typo3' /></p>
                    <p>
                        <span>info@trvl.com</span>
                        <span>+1-800-555-1115</span>
                    </p>
                    <div className="nav-footer-icons">
                        <div className="nav-footer-icon">
                            <img src="/images/facebook.svg" alt="" />
                        </div>
                        <div className="nav-footer-icon">
                            <img src="/images/instagram.svg" alt="" />
                        </div>
                        <div className="nav-footer-icon">
                            <img src="/images/twitter.svg" alt="" />
                        </div>
                        <div className="nav-footer-icon">
                            <img src="/images/linkedin.svg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <p className="author">Malin Nilsson, 2022 - <a href="https://github.com/malin-nilsson"
                target="_blank"
                rel="noreferrer">Github</a></p>
        </footer>
    )
}
