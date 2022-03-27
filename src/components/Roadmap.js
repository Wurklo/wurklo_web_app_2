import { Container } from 'reactstrap';
import '../styles/timeline.css';

function Roadmap() {

    return (
        <div className='roadmap py-5' id="timeline">
            <Container className="py-5 p-md-5">
                <h1 class="text-center" id="roadmap">Roadmap</h1>
                <ul class="timeline">
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Q1 2022</span>
                            </div>
                            <div class="desc">App research/planning, App Preview, Marketing Campaign, Landing Page, Explore Partnerships, Launch Laborer NFTs, Building social community, NFTs Giveaway Competition, Whitepaper, App Building Begins </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Q2 2022</span>
                            </div>
                            <div class="desc">List on CMC, P2P Exchange Audit, Launch P2P Exchange, Seed Funding, Launch Operatives NFTs, Private Sale Launch, Physical coin creation/sale, GitBook, Update Website </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Q3 2022</span>
                            </div>
                            <div class="desc">Cybersecurity App Audit, Token/Contracts Audit, Penetration Testing, Service Wurkers NFTs, Public Sale, App Test</div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">Q4 2022</span>
                            </div>
                            <div class="desc">App Beta, Launch token on Raydium, List CG, List Kucoin, Launch Craft & Trade NFTs, One of a Kind NFT
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">Q1 2023</span>
                            </div>
                            <div class="desc">List Binance, List Coinbase, Setup validator node, On/Off Fiat Ramp inApp
                            </div>
                        </div>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Roadmap;