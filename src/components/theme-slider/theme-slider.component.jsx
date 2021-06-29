import { useState, useEffect } from 'react'; 

import { ReactComponent as LightIcon } from '../../assets/desktop/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../../assets/desktop/icon-moon.svg';

import './theme-slider.styles.scss';

const ThemeSlider = () => {
    const [toggled, setToggle] = useState(false);

    const mode = toggled ? 'dark' : 'light';

    const themes = {
        light: {
            '--violet-button': '#5964E0',
            '--dark-blue-text': '#19202D',
            '--white': '#ffffff',
            '--light-grey': '#F4F6F8',
            '--blue-opacity': 'rgba(89, 100, 224, .1)',
            '--blue-opacity-hover': 'rgba(89, 100, 224, .35)',
            '--checkbox-unchecked': 'rgba(25, 32, 45, .135)'
        },
        dark: {
            '--white': '#19202D',
            '--light-grey': '#121721',
            '--dark-blue-text': '#ffffff',
            '--blue-opacity': 'rgba(255, 255, 255, .1)',
            '--violet-button': '#ffffff',
            '--blue-opacity-hover': 'rgba(255, 255, 255, .35)',
            '--checkbox-unchecked': 'rgba(255, 255, 255, .135)'
        }
    };

    useEffect(() => {
        const newTheme = toggled ? themes.dark : themes.light;

        for (let key in newTheme) {
            document.documentElement.style.setProperty(key, newTheme[key]);
        }
    }, [toggled]);

    return (
        <div className='slider-container'>
            <LightIcon />
            <div className='slider' onClick={() => setToggle(!toggled)}>
                <div className={`dot ${mode}`} />
            </div>
            <DarkIcon />
        </div>
    );
};

export default ThemeSlider;