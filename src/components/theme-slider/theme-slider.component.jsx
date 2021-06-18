import { ReactComponent as LightIcon } from '../../assets/desktop/icon-sun.svg';
import { ReactComponent as DarkIcon } from '../../assets/desktop/icon-moon.svg';

import './theme-slider.styles.scss';

const ThemeSlider = () => {
    return (
        <div className='slider-container'>
            <LightIcon />
            <div className='slider'>
                <div className='dot' />
            </div>
            <DarkIcon />
        </div>
    );
};

export default ThemeSlider;