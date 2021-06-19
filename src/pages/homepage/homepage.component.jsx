import Header from '../../components/header/header.component';
import SearchBar from '../../components/search-bar/search-bar.component';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <section className='homepage'>
            <Header />
            <SearchBar />
        </section>
    )
};

export default Homepage;