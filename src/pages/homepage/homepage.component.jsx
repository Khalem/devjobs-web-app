import { useMediaQuery } from 'react-responsive';

import Header from '../../components/header/header.component';
import SearchBarMobile from '../../components/search-bar/search-bar-mobile.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import JobCard from '../../components/job-card/job-card.component';

import data from '../../data/data.json';

import './homepage.styles.scss';

const Homepage = () => {
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <section className='homepage'>
            <Header />
            { isTabletOrDesktop ? <SearchBar /> : <SearchBarMobile /> }
            <section className='job-cards-container'>
                {
                    data.map(obj => (
                        <JobCard obj={obj} key={obj.id}/>
                    ))
                }
            </section>
        </section>
    )
};

export default Homepage;