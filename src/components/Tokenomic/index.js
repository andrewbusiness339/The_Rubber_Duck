import React, { Component } from 'react'
import './index.css'

class Tokenomic extends Component {
    render() {
        return (
            <div className="tokenomicssection">
               <h1 id="tokenomicsSection" className="section-heading">Tokenomics</h1>

               <div className="progress-img2 w-container" style={{transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, transformStyle: `preserve-3d`, opacity: 1}}>
                   <div className="replaced">
                       <div className="new-link-block">
                           <div className="image-holder">
                               <img src="/images/eth.svg" loading="lazy" width="51" alt="Ethereum Logo" className="image-11"/>
                            </div>
                            <div className="icon-text-replace">Ethereum<br/>SmartContract <br/></div>
                        </div>
                        <div className="new-link-block">
                            <div className="image-holder">
                                <img src="/images/kitty.png" loading="lazy" width="98" sizes="(max-width: 479px) 100vw, (max-width: 767px) 10vw, 98.00000762939453px" alt="The KittyButt Logo" className="image-12" />
                            </div>
                            <div className="icon-text-replace">10,000<br/>KittyButts</div>
                        </div>
                        <div className="new-link-block">
                            <div className="image-holder">
                                <img src="/images/metamask.svg" loading="lazy" width="83" alt="The Metamask logo" className="image-14" />
                            </div>
                            <div className="icon-text-replace">0.02 ETH <br />Pre-Sale Price<br /></div>
                        </div>
                        <div className="new-link-block">
                            <div className="image-holder">
                                <img src="/images/ipfs.png" loading="lazy" width="74" sizes="(max-width: 479px) 100vw, (max-width: 767px) 10vw, 74.00000762939453px"className="image-10"/>
                            </div>
                             <div className="icon-text-replace">InterPlanetary File System Storage</div> 
                        </div>
                        <div className="new-link-block">
                            <div className="image-holder">
                                <img src="/images/onchain.svg" loading="lazy" width="83" alt="Icon representing randomisation" className="image-9"/>
                            </div>
                            <div className="icon-text-replace">On-Chain Randomised Starting Index</div>
                        </div>
                    </div>
                </div>

                <div className="tokenomics wf-section">


                    <div className="tokenomics-container w-container">
                        <div className="grid grid-cols-5 text-white">
                            <div className="">
                                <img src="/images/eth.svg" loading="lazy" width="57" style={{opacity: 1}} data-w-id="0525b926-abae-7cf3-a3da-a9886f3b4de0" alt="Ethereum Logo" className="image-16" />
                            </div>
                            <div className="col-span-4">
                                <h2><span className="text-span w-clearfix text-white"><strong className="heading3" style={{opacity: 1, fontSize: '32px'}}>Ethereum Smart Contract</strong></span></h2>
                                <div className="stretchgoalcontent mt-6" style={{opacity: 1}}>
                                    Built on the ERC-721 Non-Fungible Token Standard, the KittyButts can be owned by anyone with an Ethereum Wallet address.<br/><br/>KittyButts are fully transferrable and tradeable on platforms such as Open Sea.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tokenomics-container w-container">
                        <div className="grid grid-cols-5 text-white">
                            <div className="">
                                <img src="/images/kitty.png" loading="lazy" width="57" style={{opacity: 1}} data-w-id="0525b926-abae-7cf3-a3da-a9886f3b4de0" alt="Ethereum Logo" className="image-16" />
                            </div>
                            <div className="col-span-4">
                                <h2><span className="text-span w-clearfix text-white"><strong className="heading3" style={{opacity: 1, fontSize: '32px'}}>10,000 KittyButts
                                </strong></span></h2>
                                <div className="stretchgoalcontent mt-6" style={{opacity: 1}}>
                                With 41 Colors.. 22 Furs.. and over 130 accessories. The possible combinations are truly CAT-astrophic.<br/><br/>300 boxed KittyButts are reserved for core team, giveaways and future promos.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tokenomics-container w-container">
                        <div className="grid grid-cols-5 text-white">
                            <div className="">
                                <img src="/images/kitty.png" loading="lazy" width="57" style={{opacity: 1}} data-w-id="0525b926-abae-7cf3-a3da-a9886f3b4de0" alt="Ethereum Logo" className="image-16" />
                            </div>
                            <div className="col-span-4">
                                <h2><span className="text-span w-clearfix text-white"><strong className="heading3" style={{opacity: 1, fontSize: '32px'}}>0,02 ETH Pre-Sale Price

                                </strong></span></h2>
                                <div className="stretchgoalcontent mt-6" style={{opacity: 1}}>
                                KittyButts are Mintable at 0.02 ETH (excluding Gas cost) starting 30th July 2021. You can mint 10 per transaction. KittyButts are initially "boxed" (unrevealed). They are only unboxed when the pre-sale period ends or sooner if all 10,000 KittyButts are minted before then.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tokenomics-container w-container">
                        <div className="grid grid-cols-5 text-white">
                            <div className="">
                                <img src="/images/kitty.png" loading="lazy" width="57" style={{opacity: 1}} data-w-id="0525b926-abae-7cf3-a3da-a9886f3b4de0" alt="Ethereum Logo" className="image-16" />
                            </div>
                            <div className="col-span-4">
                                <h2><span className="text-span w-clearfix text-white"><strong className="heading3" style={{opacity: 1, fontSize: '32px'}}>InterPlanetary File System

                                </strong></span></h2>
                                <div className="stretchgoalcontent mt-6" style={{opacity: 1}}>
                                The IPFS is a peer-to-peer network for storing and sharing data. This means KittyButts are decentralised and not soley on any one website or server.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tokenomics-container w-container">
                        <div className="grid grid-cols-5 text-white">
                            <div className="">
                                <img src="/images/kitty.png" loading="lazy" width="57" style={{opacity: 1}} data-w-id="0525b926-abae-7cf3-a3da-a9886f3b4de0" alt="Ethereum Logo" className="image-16" />
                            </div>
                            <div className="col-span-4">
                                <h2><span className="text-span w-clearfix text-white"><strong className="heading3" style={{opacity: 1, fontSize: '32px'}}>On-Chain Randomised Starting Index
                                </strong></span></h2>
                                <div className="stretchgoalcontent mt-6" style={{opacity: 1}}>
                                Using a Starting Index, similar to note-worthy NFT collections such as The Hashmasks, we can ensure KittyButts are minted fairly.
                                <br/><br/>No-one knows what KittyButt will be minted, not even us..
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

export default Tokenomic