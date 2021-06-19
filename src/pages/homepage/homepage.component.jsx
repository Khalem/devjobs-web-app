import { useMediaQuery } from 'react-responsive';

import Header from '../../components/header/header.component';
import SearchBarMobile from '../../components/search-bar/search-bar-mobile.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import './homepage.styles.scss';

const Homepage = () => {
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <section className='homepage'>
            <Header />
            { isTabletOrDesktop ? <SearchBar /> : <SearchBarMobile /> }
        </section>
    )
};

export default Homepage;