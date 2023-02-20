import React, { Component } from 'react'
import './index.css'

class Minter extends Component {
    render() {
        return (
            <div className="feature-image" style={{backgroundImage: 'url(/images/back.jpg)'}}>
                <div className="black-overlay">
                    <div className="container-14 w-container mt-20">
                        <img src={'/images/title.png'} loading="lazy" width="679"/>
                    </div>
                    <div className="container-16 w-container">
                        <p className="paragraph-4">
                        10,000 Sassy AF KittyButts minted on the Ethereum Blockchain
                        </p>
                    </div>
                    <h1 className="heading-5">Sold Out!</h1>
                    <a href="https://opensea.io/collection/the-kittybutts" className="button w-button">Buy on OpenSea</a>
                    <div className="container-15 w-container">
                        <a href="https://twitter.com/TheKittyButts" className="link-block-6 w-inline-block">
                            <img src="/images/twitter.png" loading="lazy" alt="" className="image-44" />

                            </a>
                        <a href="http://discord.gg/yJHr8Msdzr" className="link-block-6 w-inline-block">
                            <img src="/images/discord.png" loading="lazy" alt="" className="image-45"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Minter