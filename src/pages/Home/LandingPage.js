import '../../App.css';
import CreateWurker from '../../components/CreateWurker';
import Search from '../../components/Search';
import logo from '../../images/VectorEPS_ByTailorBrands2.svg'

function LandingPage() {

    return (
        <div className='search'>
            <div className='text-center'>
                <img src={logo} className="landingPage__logo shadowed" alt="Wurklo logo" />
                <p className='landingPage__logoText pt-3'>Wurklo</p>
            </div>
            <Search placeholderValue="Search wurkers ... ex. full stack developer, react" />
            <div className='mt-4'>
                <CreateWurker />
            </div>
        </div>
    );
};

export default LandingPage;