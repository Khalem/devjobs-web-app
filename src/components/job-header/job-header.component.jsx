import getLogoUrl from '../../utils/logo.utils';

import Button from '../../components/button/button.component';

import './job-header.styles.scss';

const JobHeader = ({ logo, logoBackground, company, website }) => (
    <div className='job-post-header'>
        <div className='img-wrapper' style={{ backgroundColor: logoBackground }}>
            <img src={getLogoUrl(logo)} alt={company} />
        </div>
        <div className='header-content'>
            <div className='company-details'>
                <h2>{company}</h2>
                <p>{`${company}.com`}</p>
            </div>
            <a href={website} target='_blank' rel='noreferrer'><Button inverted='true'>Company Site</Button></a>
        </div>
    </div>
);

export default JobHeader;