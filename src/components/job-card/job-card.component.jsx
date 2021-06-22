import { withRouter } from 'react-router-dom';

import { getLogoUrl } from '../../utils/logo.utils';

import './job-card.styles.scss';

const JobCard = ({ obj: { id, logo, logoBackground, company, postedAt, contract, position, location }, history }) => {
    return (
        <div className='job-card'>
            <div className='logo-wrapper' style={{ backgroundColor: logoBackground }} >
                <img 
                    src={getLogoUrl(logo)} 
                    className='logo'
                    alt={company} 
                />
            </div>
            <div className='time-posted-fulltime-wrapper'>
                <p>{postedAt}</p>
                <div className='dot' />
                <p>{contract}</p>
            </div>
            <h3 className='job-title' onClick={() => history.push(`/${id}`)}>{position}</h3>
            <p className='job-company'>{company}</p>
            <h4 className='job-location'>{location}</h4>
        </div>
    );
};

export default withRouter(JobCard);