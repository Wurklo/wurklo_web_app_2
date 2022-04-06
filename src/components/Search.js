import { Button, Input, Form } from 'reactstrap';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Search() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for: ", search)
        setSearch('')
        navigate(`/search-results/?=${search}`)
    }

    return (
        <div className="px-3">
            <div className='search__inputContainer'>
                <Form>
                    <Input
                        className='search__input shadow ps-5'
                        placeholder='Search wurkers ... ex. plumber, leaking roof'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <SearchIcon className='search__searchIcon' />
                    <Button
                        hidden
                        type='submit'
                        onClick={handleSearch}
                        className='search__button shadow'
                    >
                        Hidden Search Button
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Search;