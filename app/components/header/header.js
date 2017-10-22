import React from 'react';
import Logo from '../logo/logo.js';

export default function(props) {
    return (
        <div className="header section">
            <div className="header__inner section__inner">
                <div className="header__logo">
                    <a href="/">
                        <Logo></Logo>
                    </a>
                </div>
                <div className="header__hamburger">
                    
                </div>
                <div className="header__navigation">
                    <ul className="navigation">
                        <li className="navigation__item">
                            <a 
                                href="http://teespring.com/stores/nerdtalk" 
                                className="navigation__link"
                            >
                                Store
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}