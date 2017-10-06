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
                    <section className="section">
                        <div className="section__inner padded typography typography--article">
                            <img src="https://vangogh.teespring.com/v3/image/cb-x8vy8F1ntz6UthLhu4r_Ls3Y/480/560.jpg" />
                            <p>Nice!</p>
                            <p>You've taken time out from facebook 
                                or whatever you've been doing. So I'll be brief and quick.
                            </p>
                            <h2>Why a hoodie?</h2>
                            <p>Most developers I know are mature, advanced and use the best practices. 
                                The problems they have seem less and less about the code they write, 
                                but the libraries, the documentation, the api, the build, authorisation 
                                and working with everyone outside the dev team.
                            </p>
                            <p>If that's you, it's part of being a developer.</p>
                        </div>
                    </section>
                </article>
            </div>
        )

    }
}