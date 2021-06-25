import './time-posted-fulltime.scss';

const TimePostedFulltime = ({ postedAt, contract }) => (
    <div className='time-posted-fulltime-wrapper'>
        <p>{postedAt}</p>
        <div className='dot' />
        <p>{contract}</p>
    </div>
);

export default TimePostedFulltime;