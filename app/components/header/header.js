import React from 'react';
import Logo from '../logo/logo.js';

export default function(props) {
    return (
        <div className="header">
            <div className="header__logo">
                <Logo></Logo>
            </div>
            <div className="header__hamburger">
                
            </div>
            <div className="header__navigation">
                <ul className="navigation">
                    <li className="navigation__item">
                        <a 
                            src="http://teespring.com/stores/nerdtalk" 
                            className="navigation__link"
                        >
                            Store
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}