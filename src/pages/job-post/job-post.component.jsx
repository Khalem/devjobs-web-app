import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import JobHeader from '../../components/job-header/job-header.component';

import initialData from '../../data/data.json';

import './job-post.styles.scss';

const JobPost = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();

    useEffect(() => {
        initialData.forEach(item => {
            if (item.id === Number(id)) setJob(item);
        });
    }, []);

    return (
        <section className='job-post-container'>
            {
                job ? 
                <JobHeader 
                    logo={job.logo}
                    logoBackground={job.logoBackground}
                    company={job.company}
                    website={job.website}
                />
                : <h2>Loading..</h2>
            }
        </section>
    );
};

export default JobPost;