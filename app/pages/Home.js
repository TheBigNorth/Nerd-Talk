import React, { Component } from 'react';
import AppHeader from '../components/header/header.js';
import {createClient} from 'contentful';
import router from '../http/router.js';
import find from 'lodash.find';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        
        const client = createClient({
            space: 'hh21kv3qm3ch',
            accessToken: 'd966a8167d34df659dbd96c800a6a4295a9dc1a424a8a11a0ab8c1668e566c88'
        });
        
        client.getEntries({
            content_type: 'landing-page',
            order: '-sys.createdAt'
        })
        .then((response) => {
            if (response.items.length === 0) {
                return router.navigate('/');
            }

            let posts = response.items.map((content, index) => {
                let post = content.fields;
                return {
                    title: post.title,
                    content: post.content,
                    imageURL: find(response.includes.Asset, (image) => {
                        return image.sys.id === post.image.sys.id;
                    }).fields.file.url,
                    date: {
                        day: (new Date(post.date)).getDate(),
                        month: (new Date(post.date)).getMonth() + 1,
                        year: (new Date(post.date)).getFullYear()
                    },
                    slug: post.slug
                }
            });
            this.setState({posts: posts})
        })
        .catch(console.error)

    }

    goToArticle(slug) {
        router.navigate('/l/' + slug);
    }
    
    render() {

        return (
            <div>
                <AppHeader></AppHeader>
                
                <div className="header-spacer"></div>

                <span className="spacer spacer--small"></span>

                {this.state.posts.map((post, index) => {
                    return <article key={index} className="section">

                        <div className="section__inner padded">
                            <div className="post-intro">
                                <img className="intro-image" src={post.imageURL} />

                                <span className="spacer spacer--xsmall spacer--small@medium"></span>

                                <h1 className="post-intro__title">
                                    {post.title}
                                </h1>

                                <date className="post-intro__date">
                                    {post.date.day}-
                                    {post.date.month}-
                                    {post.date.year}
                                </date>
                                
                                <button 
                                    className="button button--primary"
                                    onClick={this.goToArticle.bind(this, post.slug)}
                                >
                                    Read
                                </button>
                            </div>
                        </div>

                        <span className="spacer spacer--medium spacer--super@large"></span>
                    </article>
                })}

                <span className="spacer spacer--medium spacer--super@large"></span>

            </div>
        )

    }
}