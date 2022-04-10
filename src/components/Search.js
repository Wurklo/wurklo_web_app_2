import { Input } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Search({placeholderValue, placeholderSearchedValue}) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search-results/${search ? search : "full stack developer"}`)
        setSearch('')
    }

    return (
        <div className="px-3">
            <div className='search__inputContainer'>
                <form>
                    <Input
                        className='search__input shadow ps-5'
                        placeholder={placeholderSearchedValue ? placeholderSearchedValue : placeholderValue}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <SearchIcon className='search__searchIcon text-secondary' />
                    <button
                        type='submit'
                        onClick={handleSearch}
                        className='search__button p-1 pe-2'
                    >
                        <ArrowForwardRoundedIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;