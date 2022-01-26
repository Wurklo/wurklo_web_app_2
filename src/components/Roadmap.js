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
                                <span class="flag">January</span>
                            </div>
                            <div class="desc">App research/planning, App Preview, Marketing Campaign, Landing Page,
                                Explore Partnerships, Launch NEx, Launch Laborer NFTs, Building social/NEx
                                community, NFTs Giveaway Competition</div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">February</span>
                            </div>
                            <div class="desc">App Design, Whitepaper, Operatives NFT Preview, Media Articles
                                Published</div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-r">
                            <div class="flag-wrapper">
                                <span class="flag">March</span>
                            </div>
                            <div class="desc">App Building, App Preview Updates, Launch Operatives NFTs, NFTs
                                Giveaway Competition</div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-l">
                            <div class="flag-wrapper">
                                <span class="flag">April</span>
                            </div>
                            <div class="desc">App Updates, Service Workers NFTs Preview
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="direction-r">

                        </div>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

export default Roadmap;