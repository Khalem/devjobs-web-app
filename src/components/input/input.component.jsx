import './input.styles.scss';

const Input = ({ className, Icon=false, ...otherProps }) => {
    return (
        <label className={className}>
            {Icon && <Icon />}
            <input type='text' className='title-search' {...otherProps} />
        </label>
    );
};

export default Input;