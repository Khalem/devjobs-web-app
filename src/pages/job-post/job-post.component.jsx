import { useParams } from 'react-router-dom';
import './job-post.styles.scss';

const JobPost = () => {
    const { id } = useParams();

    return (
        <section className='job-post-container'>
            <h1>Job {id}</h1>
        </section>
    );
};

export default JobPost;