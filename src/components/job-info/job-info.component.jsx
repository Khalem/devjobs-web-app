import './job-info.styles.scss';

const JobInfo = ({information: { content, items }, title, ol=false}) => {
    return (
        <section className='info'>
            <h3>{title}</h3>
            <p>{content}</p>
            {
                ol ?
                <ol>
                    {
                        items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ol>
                :
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            }
        </section>
    );
};

export default JobInfo;