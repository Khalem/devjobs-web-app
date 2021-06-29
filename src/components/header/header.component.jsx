import { Link } from 'react-router-dom';

import ThemeSlider from '../theme-slider/theme-slider.component';

import { ReactComponent as Logo } from '../../assets/desktop/logo.svg';

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <div className='header-content'>
            <Link to='/'>
                <Logo />
            </Link>
            <ThemeSlider />
        </div>
    </header>
);

export default Header;