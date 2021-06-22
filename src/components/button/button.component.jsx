import './button.styles.scss';

const Button = ({ children, searchBar, width='auto', handleClick=null, inverted }) => {
    const additionalClass = searchBar ? 'search-btn' : inverted ? 'inverted' : '';

    return (
        <button className={`btn ${additionalClass}`} style={{ width }} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;