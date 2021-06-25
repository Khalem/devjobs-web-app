import Button from '../../components/button/button.component';

import './job-post-footer.styles.scss';

const JobPostFooter = ({ isMobile, apply, position, company }) => (
    <div className='job-post-footer'>
        {
            isMobile ?
            <div>
                <a href={apply} target='_blank'><Button width='100%'>Apply Now</Button></a>
            </div>
            :
            <div className='footer-content'>
                <div className='footer-text'>
                    <h3>{position}</h3>
                    <p>{company}</p>
                </div>
                <a href={apply} target='_blank'><Button>Apply Now</Button></a>
            </div>
        }
    </div>
);

export default JobPostFooter;