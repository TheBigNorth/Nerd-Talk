import React, { Component } from 'react';
import Header from '../header/header.js';

export default class App extends Component {
    
    render() {

        return (
            <div>
                <Header></Header>
                <div className="header-spacer"></div>

                <article>
                    <header className="section">
                        <div className="section__inner padded">
                            <div className="post-intro">
                                <h1 className="post-intro__title">
                                    Nerd Talk launches a developer hoodie: The Story
                                </h1>
                                <date className="post-intro__date">
                                    Monday 1 October 2017
                                </date>
                            </div>
                        </div>
                    </header>
                </article>
            </div>
        )

    }
}