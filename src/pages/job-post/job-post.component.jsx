import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import JobHeader from '../../components/job-header/job-header.component';
import TimePostedFulltime from '../../components/time-posted-fulltime/time-posted-fulltime';
import Button from '../../components/button/button.component';
import JobInfo from '../../components/job-info/job-info.component';
import JobPostFooter from '../../components/job-post-footer/job-post-footer.component';

import initialData from '../../data/data.json';

import './job-post.styles.scss';

const JobPost = () => {
    const [job, setJob] = useState(null);
    const { id } = useParams();
    const isMobile = useMediaQuery({ maxWidth: 700 });

    useEffect(() => {
        initialData.forEach(item => {
            if (item.id === Number(id)) setJob(item);
        });
    }, []);

    if (!job) return <h1>Loading..</h1>

    return (
        <Fragment>
            <section className='job-post-container'>
                <JobHeader 
                        logo={job.logo}
                        logoBackground={job.logoBackground}
                        company={job.company}
                        website={job.website}
                    />
                    <div className='job-details-container'>
                        <div className='job-details-header'>
                             <div className='job-details-header-text'>
                                <TimePostedFulltime 
                                    postedAt={job.postedAt}
                                    contract={job.contract}
                                />
                                <h1>{job.position}</h1>
                                <h4>{job.location}</h4>
                            </div>
                            <a href={job.apply} target='_blank' rel='noreferrer'><Button width={isMobile ? '100%' : '141px'}>Apply Now</Button></a>
                        </div>
                        <p>{job.description}</p>
                        <JobInfo 
                            information={job.requirements}
                            title='Requirements'
                        />
                        <JobInfo 
                            information={job.role}
                            title='What You Will Do'
                            ol={true}
                        />
                    </div>
            </section>
            <JobPostFooter 
                isMobile={isMobile}
                apply={job.apply}
                position={job.position}
                company={job.company}
            />
        </Fragment>
    );
};

export default JobPost;