import './button.styles.scss';

const Button = ({ children, searchBar, width='auto', handleClick=null }) => {
    const additionalClass = searchBar ? 'search-btn' : '';

    return (
        <button className={`btn ${additionalClass}`} style={{ width }} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;