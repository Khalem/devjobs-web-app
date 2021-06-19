import { Fragment, useState, useEffect } from 'react';

import Button from '../button/button.component';
import Input from '../input/input.component';
import Checkbox from '../checkbox/checkbox.component';

import { ReactComponent as FilterIcon } from '../../assets/mobile/icon-filter.svg';
import { ReactComponent as SearchIcon } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as LocationIcon } from '../../assets/desktop/icon-location.svg';

import './search-bar-mobile.styles.scss';

const SearchBarMobile = () => {
    const [checked, setChecked] = useState(false);
    const [modalActive, setModalActive] = useState(false);

    // detect when user clicks off filter menu
    useEffect(() => {
        document.addEventListener('click', e => {
            const target = e.target;

            if (target === document.getElementsByClassName('filter-modal-overlay')[0]) {
                setModalActive(false);
            }
        });
    }, []);

    return (
        <Fragment>
            <div className='search-bar-container'>
                <form className='search-bar'>
                    <Input
                        type='text'
                        className='title-search'
                        placeholder='Filter by title...'
                        name='title'
                    />
                    <div className='filter' onClick={() => setModalActive(true)}>
                        <FilterIcon />
                    </div>
                    <Button searchBar={true} mobile={true}><SearchIcon fill='white' width='20' height='20' viewBox='0 0 24 24' /></Button>
                </form>
            </div>
            {
                modalActive &&
                <div className='filter-modal-overlay'>
                    <div className='filter-modal'>
                        <Input 
                            className='location-search'
                            Icon={LocationIcon}
                            placeholder='Filter by location…' 
                            name='location'
                        />
                        <div>
                            <Checkbox 
                                checked={checked}
                                setChecked={setChecked}
                                isTablet={false}
                            />
                            <Button width='100%'>Search</Button>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default SearchBarMobile;