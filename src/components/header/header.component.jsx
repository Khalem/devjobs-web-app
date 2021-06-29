import ThemeSlider from '../theme-slider/theme-slider.component';

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg';

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <div className='header-content'>
            <Logo />
            <ThemeSlider />
        </div>
    </header>
);

export default Header;