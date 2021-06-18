import ThemeSlider from '../theme-slider/theme-slider.component';

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <div className='header-content'>
            <h1 className='header-title'>devjobs</h1>
            <ThemeSlider />
        </div>
    </header>
);

export default Header;