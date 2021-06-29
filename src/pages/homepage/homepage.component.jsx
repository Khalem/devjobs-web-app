import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import SearchBarMobile from '../../components/search-bar/search-bar-mobile.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import JobCard from '../../components/job-card/job-card.component';
import Button from '../../components/button/button.component';

import initialData from '../../data/data.json';

import './homepage.styles.scss';

const Homepage = () => {
    const [data, setData] = useState(initialData);
    const [paginatedData, setPaginatedData] = useState([]);
    const [pageCounter, setPageCounter] = useState(1);
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        handlePagination(data);
    }, [pageCounter]);

    const handleSubmit = (e, { title, location }, fulltime) => {
        e.preventDefault();
        let newData = [];

        if (!title && !location) {
            newData = [...initialData];
        }

        initialData.forEach(item => {
            const { position, company } = item;

            if (title && position.toLowerCase().includes(title.toLowerCase()) && !newData.includes(item)) {
                newData.push(item);
            } else if (title && company.toLowerCase().includes(title.toLowerCase()) && !newData.includes(item)) {
                newData.push(item);
            }
            
            if (location && item.location.toLowerCase().includes(location.toLowerCase()) && !newData.includes(item)) {
                newData.push(item);
            }
        });

        if (!fulltime) {
            setData(newData);
            handlePagination(newData);
        } else {
            const cleanedData = newData.filter(item => item.contract === 'Full Time');
            setData(cleanedData);
            handlePagination(cleanedData);
        }
    };

    const handleClick = () => {
        if (paginatedData.length === initialData.length) {
            setPageCounter(1);
        } else {
            setPageCounter(pageCounter + 1);
        }
    };

    const handlePagination = (dataToPaginate) => {
        setPaginatedData(dataToPaginate.slice(0, (12 * pageCounter)));
    }

    return (
        <section className='homepage'>
            { isTabletOrDesktop ? <SearchBar handleSubmit={handleSubmit} /> : <SearchBarMobile handleSubmit={handleSubmit} /> }
            <section className='job-cards-container'>
                {
                    paginatedData.map(obj => (
                        <JobCard obj={obj} key={obj.id}/>
                    ))
                }
            </section>
            {
                data.length >= 12 &&
                <div className='button-container'>
                    <Button handleClick={handleClick}>{ paginatedData.length === data.length ? 'Show Less' : 'Load More' }</Button>
                </div>
            }
        </section>
    )
};

export default Homepage;