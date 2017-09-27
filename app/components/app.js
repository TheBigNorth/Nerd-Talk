import React, { Component } from 'react';
import Logo from './logo/logo.js';

export default class App extends Component {
    
    render() {

        return (
            <div>
                <div className="header">
                    <div className="header__logo">
                        <Logo></Logo>
                    </div>
                    <div className="header__hamburger">

                    </div>
                </div>
            </div>
        )

    }
}