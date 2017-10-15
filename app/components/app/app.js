import React, { Component } from 'react';
import AppHeader from '../header/header.js';
import {createClient} from 'contentful'
import Router from 'navigo';
import LandingPage from '../../pages/LandingPage.js';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showText: true,
            page: ''
        }
    }

    componentDidMount() {

        const router = new Router(window.location.origin);
        router
            .on('/l/:slug', (params) => {
                this.setState({ page: 'landing-page' });
            })
            .on('*', () => {
                this.setState({ page: 'home' });
            })
            .resolve();
        
    }
    
    render() {

        return (
            <div>
                <LandingPage></LandingPage>

                <div className="copynotice">
                    <div className="copynotice__inner">
                        <div className="copynotice__sponsor">
                            Headless CMS Powered By Contentful
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}