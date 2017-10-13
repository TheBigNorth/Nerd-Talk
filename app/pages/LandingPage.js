import React, { Component } from 'react';
import AppHeader from '../components/header/header.js';
import {createClient} from 'contentful';
import Markdown from 'react-remarkable';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            date: {}
        }
        console.log(this.state)
    }

    componentDidMount() {

        const client = createClient({
            space: 'hh21kv3qm3ch',
            accessToken: 'd966a8167d34df659dbd96c800a6a4295a9dc1a424a8a11a0ab8c1668e566c88'
        });
        
        client.getEntries({
            content_type: 'landing-page',
            'fields.slug': 'example-landing-page',
            'limit': 1
        })
        .then((response) => {
            if (response.items.length === 0) {
                return;
            }
            let content = response.items[0].fields;
            let image = response.includes.Asset[0].fields.file.url;
            console.log(new Date(content.date));
            this.setState({content: content.content})
            this.setState({title: content.title});
            this.setState({url: image});
            this.setState({date: {
                day: (new Date(content.date)).getDate(),
                month: (new Date(content.date)).getMonth() + 1,
                year: (new Date(content.date)).getFullYear()
            }});
        })
        .catch(console.error)
    }

    componentDidUpdate() {
        
    }
    
    render() {

        return (
            <div>
                <AppHeader></AppHeader>

                <div className="header-spacer"></div>

                <span className="spacer spacer--medium@medium spacer--large@large"></span>

                <article>
                    <header className="section">
                        <div className="section__inner padded">
                            <div className="post-intro">
                                <h1 className="post-intro__title">
                                    {this.state.title}
                                </h1>
                                <date className="post-intro__date">
                                    {this.state.date.day}-
                                    {this.state.date.month}-
                                    {this.state.date.year}
                                </date>
                            </div>
                        </div>
                    </header>
                    <section className="section">
                        <div className="section__inner padded typography typography--article">
                            <img src={this.state.url} />
                            
                            <Markdown source={this.state.content} />

                            <p>
                                <a href="https://teespring.com/en-GB/99-problems-zero-bugs?tsmac=store&tsmic=nerdtalk#pid=377&cid=101241&sid=front">
                                    <button className="button button--secondary">Buy Here</button>
                                </a>
                            </p>
                        </div>
                    </section>

                    <span className="spacer spacer--medium spacer--super@large"></span>

                    <footer className="author">
                        <div className="author__image-holder">
                            <img src="https://scontent.flhr3-1.fna.fbcdn.net/v/t1.0-1/p160x160/12075069_10100714711130566_3589096950752527159_n.jpg?oh=0c7f958e1df78e358cefd98334e07087&oe=5A800A27" className="author__image" />
                        </div>
                        <p className="author__name">
                            Gemma Black
                        </p>

                        <p className="author__link">
                            <a href="https://github.com/gemmadlou" target="_blank">
                                Github
                            </a>
                        </p>
                    </footer>

                </article>
            </div>
        )

    }
}