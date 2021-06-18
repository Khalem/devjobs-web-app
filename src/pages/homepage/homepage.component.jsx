import React from 'react';

import ThemeSlider from '../../components/theme-slider/theme-slider.component';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <section className='homepage'>
            <header className='header'>
                <div className='header-content'>
                    <h1 className='header-title'>devjobs</h1>
                    <ThemeSlider />
                </div>
            </header>
        </section>
    )
};

export default Homepage;