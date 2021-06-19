import { ReactComponent as CheckIcon } from '../../assets/desktop/icon-check.svg';

import './checkbox.styles.scss';

const Checkbox = ({ checked, setChecked, isTablet }) => {
    const checkboxClass = checked ? 'checkbox-checked' : 'checkbox-unchecked';

    return (
        <div className='checkbox-container'>
            <div className={checkboxClass} onClick={() => setChecked(!checked)}>
                { checked && <CheckIcon /> }
            </div>
            {
                isTablet ? <span>Full Time</span>
                : <span>Full Time Only</span>
            }
        </div>
    );
};

export default Checkbox;