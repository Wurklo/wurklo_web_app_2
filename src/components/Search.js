import { Button, Input, Form } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function Search() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search-results/?=${search}`)
        setSearch('')
    }

    return (
        <div className="px-3">
            <div className='search__inputContainer'>
                <form>
                    <Input
                        className='search__input shadow ps-5'
                        placeholder='Search wurkers ... ex. plumber, leaking roof'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <SearchIcon className='search__searchIcon text-secondary' />
                    <button
                        type='submit'
                        onClick={handleSearch}
                        className='search__button p-2'
                    >
                        <ArrowForwardRoundedIcon />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;