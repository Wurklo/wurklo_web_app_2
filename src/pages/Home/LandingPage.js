import '../../App.css';
import CreateWurker from '../../components/CreateWurker';
import Search from '../../components/Search';

function LandingPage() {

    return (
        <div className='search'>
            <Search placeholderValue="Search wurkers ... ex. full stack developer, react" />
            <div className='mt-4'>
                <CreateWurker />
            </div>
        </div>
    );
};

export default LandingPage;