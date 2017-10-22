import React, { Component } from 'react';
import AppHeader from '../header/header.js';
import {createClient} from 'contentful'
import router from '../../http/router.js';
import Blog from '../../pages/Blog.js';
import Home from '../../pages/Home.js';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showText: true,
            page: ''
        }
    }

    componentDidMount() {

        //const router = new Router(window.location.origin);
        router
            .on('/l/:slug', (params) => {
                this.setState({ page: <Blog slug={params.slug} /> });
            })
            .on('*', () => {
                this.setState({ page: <Home /> });
            })
            .resolve();
        
    }
    
    render() {

        return (
            <div>
                
                {this.state.page}

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