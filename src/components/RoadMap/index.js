import React, { Component } from 'react'
import './index.css'

class RoadMap extends Component {
    render() {
        return (
            <div class="stretchgoals w-container">
                <h1 id="goalsSection" class="section-heading">Stretch Goals</h1>
                <div class="grid grid-cols-2">
                    <div class="">
                        <ul role="list" class="w-list-unstyled">
                            <li class="stretch-goals">
                                <h4 class="stretchgoalsubheading">10% Sold</h4>
                                <div class="stretchgoalcontent" style={{opacity: 1}}>10 KittyButts will be randomly airdropped to early minters<br /></div>
                            </li>
                            <li class="stretch-goals"><h4 class="stretchgoalsubheading">25% Sold</h4><div class="stretchgoalcontent" style={{opacity: 1}}>KittyButts will seek partnership with Maddies.co so owners can earn revenue from KittyButt Merchandise</div>
                            </li>
                            <li class="stretch-goals"><h4 class="stretchgoalsubheading">50% Sold</h4><div class="stretchgoalcontent" style={{opacity: 1}}>The KittyButt Club (KBC or "Butt Club") will open its doors. This is an owners-only channel in discord where members can vote on future decisions for the KittyButt collection, including future Stretch goals! 10 KittyButts will be randomly airdropped to verified club members</div></li><li class="stretch-goals"><h4 class="stretchgoalsubheading">75% Sold</h4><div class="stretchgoalcontent" style={{opacity: 1}}>We create a Plushie for the "KittyCorn" KittyButt that will then be sent to competition winners &amp; sold online<br/></div>
                            </li>
                            <li class="stretch-goals"><h4 class="stretchgoalsubheading">100% Sold</h4><div class="stretchgoalcontent" style={{opacity: 1}}>A new kitten collection is born which takes the genetic traits of parent KittyButts to mint the new Kittens</div>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <img src="/images/kitty-club.png" loading="lazy" style={{opacity: 1}} data-w-id="6dd74e5f-4d96-20dd-5bbe-2578b431cccb"alt="" class="image-22"/>
                    </div>
                </div>

                <div className="d-block mt-10">
                    <hr />
                </div>
                
            </div>
        )
    }
}

export default RoadMap