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
                            <h3>Is it just a hoodie?</h3>
                            <p>Yeah...</p>
                            <p>Sorry.</p>
                            <p>It's a normal hoodie. It doesn't have any new exciting fibers
                                discovered in the mountains of Peru. It hasn't been handstitched
                                using 1,000 year-old secrets passed from generation to generation.
                                It wasn't dyed with organic dye from sea moluscs.
                            </p>
                            <h3>So what's so special about it then?</h3>
                            <p>Most of you guys write great code! 
                                The problems they have however seem less about the code they write, 
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
                                100% custom code.
                            </p>
                            <p>I guess it's all part of the fun of being a developer.</p>
                            <p>Hence: 99 problems but a bug ain't one.</p>
                            <h3>Warning though</h3>
                            <p>It occurred to me only after designing it. It is rather passive
                                aggressive. So be discerning about when and where you wear it.
                            </p>
                            <h3>Can we get a discount?</h3>
                            <p>Of course! You can get 30% off when you join 
                                Nerd Talk Weekly. Currently we have no plans to send a newsletter
                                yet as it's just beginning, but we plan to in future. Of course, 
                                unsubscribe anytime.
                            </p>
                            <p>
                                <button>Get a discount?</button>
                                <button>Just Buy</button>
                            </p>
                            <h3>What about the hoodie itself?</h3>
                            <p>The hoodies are custom made with the help of Teespring. They fulfill the
                                order every 3 days - or after the campaign is finished.
                            </p>
                            <h3>So no wastage?</h3>
                            <p>Nada. Teespring only print custom orders. That way, we're not adding
                                unneeded rubbish to the earth. At least, not through unwanted hoodies.</p>
                            <h3>Again. So, where’d the idea come from?</h3>
                            <p>I won’t say who, but I saw steam. It sprayed from the neck  
                                of a fellow developer. They had just returned from a meeting. 
                                They had 99 problems, but a bug wasn’t one. Cheesy I know.
                            </p>
                            <h3>Don’t like red?</h3>
                            <p>No problem. It’s my favourite colour, but if you like 
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
                                <button>Get a discount?</button>
                                <button>Just Buy</button>
                            </p>
                        </div>
                    </section>
                </article>
            </div>
        )

    }
}