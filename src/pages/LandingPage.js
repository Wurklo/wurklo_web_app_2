import '../App.css';
import Landing from '../components/Landing';
// import About from '../components/About';
import Roadmap from '../components/Roadmap';
import Preview from '../components/Preview';
import NftPreview from '../components/NftPreview';
import Nex from '../components/Nex';
import Tokenomics from '../components/Tokenomics';
import Team from '../components/Team';

function LandingPage() {

    return (
        <>
            <Landing />
            <Preview />
            <NftPreview />
            <Nex />
            <Tokenomics />
            <Roadmap />
            <Team />
        </>
    );
};

export default LandingPage;