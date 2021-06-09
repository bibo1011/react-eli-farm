import React from 'react'
// import Navi from '../Nav'

function Header () {
    return (
        <div>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">{" "}🥒 </span>{" "}Eli's Farm!
                </a>
            </h2>
        </div>
    )
}

export default Header;

