import React, { Component } from 'react'
import './index.css'

class TeamSection extends Component {
    render() {
        return (
            <div class="teamsection wf-section">
                <div class="w-container">
                    <h2 id="teamSection" class="section-heading">The Hoomans</h2>
                    <div class="grid grid-cols-2">

                        <div class="teamcardcol">
                            <div class="teamcardblock">
                                <img src="/images/member1.png" alt="" class="teamimage" />
                                <div class="div-block-24">
                                    <h4 class="teamname">KittyButt P</h4>
                                    <p class="teamdetail"><strong>KittyButt Visionary<br /></strong>Had a vision. No-one got it.</p>
                                </div>
                            </div>
                        </div>

                        <div class="teamcardcol">
                            <div class="teamcardblock">
                                <img src="images/member2.png" loading="lazy" sizes="120.00000762939453px" alt="" class="teamimage kittbuttg" />
                                <div class="div-block-23">
                                    <h4 class="teamname">KittyButt G</h4>
                                    <p class="teamdetail"><strong>KittyButt Coder <br/></strong>Doesn't like to be stroked.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2">
                        <div class="teamcardcol">
                            <div class="teamcardblock">
                                <img src="/images/member3.png" loading="lazy" sizes="120.00000762939453px" alt="" class="teamimage" />
                                <div class="div-block-24">
                                    <h4 class="teamname">Sorin</h4><p class="teamdetail"><strong>KittyButt Main Artist<br/></strong>
                                    <a href="https://sorinsorasan.com/" class="link-2">https://sorinsorasan.com/</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="teamcardcol">
                            <div class="teamcardblock">
                                <img src="/images/member3.png" loading="lazy" sizes="120.00000762939453px" alt="" class="teamimage teamimagesquare" />
                                <div class="div-block-23">
                                    <h4 class="teamname">Stanislava</h4>
                                    <p class="teamdetail"><strong>KittyButt Artist</strong></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="d-block mt-10">
                    <hr />
                </div>
            </div>
        )
    }
}

export default TeamSection