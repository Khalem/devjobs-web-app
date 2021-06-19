import './button.styles.scss';

const Button = ({ children, searchBar }) => {
    const additionalClass = searchBar ? 'search-btn' : '';

    return (
        <button className={`btn ${additionalClass}`}>
            {children}
        </button>
    );
};

export default Button;