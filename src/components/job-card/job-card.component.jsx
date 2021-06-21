import { getLogoUrl } from '../../utils/logo.utils';

import './job-card.styles.scss';

const JobCard = ({ obj: { logo, logoBackground, company } }) => {
    return (
        <div className='job-card'>
            <div className='logo-wrapper' style={{ backgroundColor: logoBackground }} >
            <img 
                src={getLogoUrl(logo)} 
                className='logo'
                alt={company} 
            />
            </div>
        </div>
    );
};

export default JobCard;