import './button.styles.scss';

const Button = ({ children, searchBar, width='auto' }) => {
    const additionalClass = searchBar ? 'search-btn' : '';


    return (
        <button className={`btn ${additionalClass}`} style={{ width }}>
            {children}
        </button>
    );
};

export default Button;