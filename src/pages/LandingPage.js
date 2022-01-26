import '../App.css';
import Landing from '../components/Landing';
// import About from '../components/About';
import Roadmap from '../components/Roadmap';
import Preview from '../components/Preview';
import NftPreview from '../components/NftPreview';
import Nex from '../components/Nex';
import Tokenomics from '../components/Tokenomics';

function LandingPage() {

    return (
        <>
            <Landing />
            {/* <About /> */}
            <Preview />
            <NftPreview />
            <Nex />
            <Tokenomics />
            <Roadmap />
        </>
    );
};

export default LandingPage;