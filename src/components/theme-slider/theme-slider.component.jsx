import { useState } from 'react'; 

import { ReactComponent as LightIcon } from '../../assets/desktop/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../../assets/desktop/icon-moon.svg';

import './theme-slider.styles.scss';

const ThemeSlider = () => {
    const [toggled, setToggle] = useState(false);

    const mode = toggled ? 'dark' : 'light'; 

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