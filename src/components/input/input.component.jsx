import './input.styles.scss';

const Input = ({ className, Icon, ...otherProps }) => {
    return (
        <label className={className}>
            <Icon />
            <input type='text' className='title-search' {...otherProps} />
        </label>
    );
};

export default Input;