import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from '../../components/header/header.component';
import SearchBarMobile from '../../components/search-bar/search-bar-mobile.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import JobCard from '../../components/job-card/job-card.component';

import initialData from '../../data/data.json';

import './homepage.styles.scss';
import Button from '../../components/button/button.component';

const Homepage = () => {
    const [data, setData] = useState([]);
    const isTabletOrDesktop = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        const paginatedData = initialData.slice(0, 12);
        console.log(paginatedData);
        setData(paginatedData);
    }, []);

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
        } else {
            const cleanedData = newData.filter(item => item.contract === 'Full Time');
            setData(cleanedData);
        }
    };

    const handlePagination = () => {
        if (data.length < initialData.length) {
            const paginatedData = initialData;
            setData(paginatedData);
        } else {
            const paginatedData = initialData.slice(0, 12);
            setData(paginatedData);
        }
    };

    return (
        <section className='homepage'>
            <Header />
            { isTabletOrDesktop ? <SearchBar handleSubmit={handleSubmit} /> : <SearchBarMobile handleSubmit={handleSubmit} /> }
            <section className='job-cards-container'>
                {
                    data.map(obj => (
                        <JobCard obj={obj} key={obj.id}/>
                    ))
                }
            </section>
            <div className='button-container'>
                <Button handleClick={handlePagination}>{ data.length === initialData.length ? 'Show Less' : 'Load More' }</Button>
            </div>
        </section>
    )
};

export default Homepage;