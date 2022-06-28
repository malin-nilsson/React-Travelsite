import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="pages-container">
            <div className="pages-content not-found">
                Oops, something went wrong
            </div>

            <div className="button-container">
                <Link to="/">
                    <button className="solid">Go Back</button>
                </Link>
            </div>
        </div>
    )
}
