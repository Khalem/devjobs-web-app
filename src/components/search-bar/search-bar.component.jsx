import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '../button/button.component';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';

import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';

import './search-bar.styles.scss';

const SearchBar = ({ handleSubmit }) => {
    const [checked, setChecked] = useState(false);
    const [formData, setFormData] = useState({ title: '', location: '' });

    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 });

    const handleChange = e => {
        const { name, value } = e.target;
        const obj = { ...formData, [name]: value };
        setFormData(obj);
    };

    const beforeSubmit = e => {
        handleSubmit(e, formData, checked);
        setFormData({ title: '', location: '' });
        setChecked(false);
    };

    return (
        <div className='search-bar-container'>
            <form className='search-bar' onSubmit={beforeSubmit}>
                <Input
                    className='title-search'
                    Icon={SearchIcon}
                    placeholder={isTablet ? 'Filter by title...' : 'Filter by title, companies, expertise…'} 
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
                <Input 
                    className='location-search'
                    Icon={LocationIcon}
                    placeholder='Filter by location…' 
                    name='location'
                    value={formData.location}
                    onChange={handleChange}
                />
                <Checkbox 
                    checked={checked}
                    setChecked={setChecked}
                    isTablet={isTablet}
                />
                <Button searchBar={true}>Search</Button>
            </form>
        </div>
    )
};

export default SearchBar;