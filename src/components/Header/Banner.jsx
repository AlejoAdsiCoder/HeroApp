import React, { useState } from 'react'
import buttonlike from '../../assets/images/buttonlikes.png'
import buttondislike from '../../assets/images/buttondislikes.png'

export default class Banner extends Component {
    
    state = {
        likes: 0,
        dislikes: 0
    }

    like() {
        this.state.likes = this.likes + 1;
    }

    dislike() {
        this.state.dislikes = this.dislike + 1;
    }

    calculateBar(){
        var total= this.state.likes + this.state.dislikes;
        //Simple math to calculate percentages
        var percentageLikes=(this.state.likes/total)*100;
        var percentageDislikes=(this.state.dislikes/total)*100;

        document.getElementById('likes').style.width=percentageLikes.toString()+"%";
	    document.getElementById('dislikes').style.width=percentageDislikes.toString()+"%";
    }

    render() {
        return (
            <div>
                <section className="banner">
                    <article className="banner__tarjet">
                        <h2>
                            Marvel - Ironman
                        </h2>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div id="bar">
                            <div id="likes"></div>
                            <div id="dislikes"></div>
	                    </div>
                        <button onClick={Like}>Like</button>
                        <button onClick={dislike}>DisLike</button>
                    </article>
                </section>
            </div>
        )
    }
}
