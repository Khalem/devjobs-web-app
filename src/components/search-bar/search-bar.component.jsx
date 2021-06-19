import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../button/button.component';
import Input from '../input/input.component';

import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';
import { ReactComponent as CheckIcon } from '../../assets/desktop/icon-check.svg';

import './search-bar.styles.scss';

const SearchBar = () => {
    const [checked, setChecked] = useState(false);
    const checkboxClass = checked ? 'checkbox-checked' : 'checkbox-unchecked';

    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });

    return (
        <div className='search-bar-container'>
            <form className='search-bar'>
                <Input
                    className='title-search'
                    Icon={SearchIcon}
                    placeholder={isTablet ? 'Filter by title...' : 'Filter by title, companies, expertise…'} 
                    name='title'
                />
                <Input 
                    className='location-search'
                    Icon={LocationIcon}
                    placeholder='Filter by location…' 
                    name='location'
                />
                <div className='checkbox-container'>
                    <div className={checkboxClass} onClick={() => setChecked(!checked)}>
                        { checked && <CheckIcon /> }
                    </div>
                    {
                        isTablet ? <span>Full Time</span>
                        : <span>Full Time Only</span>
                    }
                </div>
                <Button searchBar={true}>Search</Button>
            </form>
        </div>
    )
};

export default SearchBar;