import React, { Component } from 'react';
import AppHeader from '../components/header/header.js';
import {createClient} from 'contentful'

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
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
            console.log(response.items.fields);
            this.setState({content: content.content})
            this.setState({title: content.title});
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
                                    Nerd Talk launches the passive aggressive developer hoodie
                                </h1>
                                <date className="post-intro__date">
                                    Saturday, 7 October 2017
                                </date>
                            </div>
                        </div>
                    </header>
                    <section className="section">
                        <div className="section__inner padded typography typography--article">
                            <img src="https://vangogh.teespring.com/v3/image/cb-x8vy8F1ntz6UthLhu4r_Ls3Y/480/560.jpg" />
                            <h3>Are you a developer?</h3>
                            <p>Just checking. This hoodie was
                                made for developers by a developer.
                            </p>
                            <h3>Is it just a hoodie?</h3>
                            <p>Yeah...</p>
                            <p>Sorry.</p>
                            <p>It's a normal hoodie. It doesn't have any new exciting fibers
                                discovered in the mountains of Peru. It hasn't been handstitched
                                using 1,000 year-old secrets passed from generation to generation.
                                It wasn't dyed with organic dye from sea moluscs.
                            </p>
                            <h3>So what's so special about it then?</h3>
                            <p>Most of you guys write good code.
                                The problems you have however seem less about the code you write, 
                                but working with clients and teams outside the dev bubble.
                            </p>
                            <p>Requirements change...last minute. What the client wanted, wasn't actually
                                what the client wanted, and now months of work has to be restarted.
                                A lot of the time, the client has no idea how much work is involved.
                                They want to build another facebook, for little to no budget.
                                They've told external clients that they can deliver a product within
                                a certain amount of time without consulting you first 
                                as to what will be needed to achieve it.
                            </p>
                            <p>It's not their fault. They just don't understand. So you have to spend
                                time in meetings, explaining what can and cannot be achieved with
                                100% custom code within an optimistic time frame.
                            </p>
                            <p>I guess it's all part of the fun of being a developer.</p>
                            <p>Hence: 99 problems but a bug ain't one.</p>
                            <h3>Warning though</h3>
                            <p>It occurred to me only after designing it. It is rather passive
                                aggressive. So be discerning about when and where you wear it.
                            </p>
                            <h3>What about the hoodie itself?</h3>
                            <p>The hoodies are custom made with the help of Teespring. They fulfill the
                                order every 3 days - or after the campaign is finished.
                            </p>
                            <h3>So no wastage?</h3>
                            <p>Nada. Teespring only print custom orders. That way, we're not adding
                                unneeded rubbish to the earth. At least, not through unwanted hoodies.</p>
                            <h3>Don’t like red?</h3>
                            <p>No problem. If you like 
                                black or grey, we’ve got you covered.
                            </p>
                            <h3>Do I make the hoodies?</h3>
                            <p>Lol. No! Look. I code. I don’t sew. 
                                I don’t muck about with fabric. I just chose a company 
                                I actually trust to deliver the designs with good quality 
                                material and great customer service, in case you need to 
                                send it back. In fact, Teespring have a great service, check them out. 
                                If you like making slogans or are more arty, go ahead
                                and create cool t-shirts and apparel with them too.
                            </p>
                            <h3>Yeah, what about returns?</h3>
                            <p>Tee Spring will help you with returns. 
                                You get a good amount of time to return it, with 30 days.
                                And they have a customer service team which is handy.
                                However, I can deal with issues. No problem.
                            </p>
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